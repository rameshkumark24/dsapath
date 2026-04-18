"use client";

import { useEffect, useState, FormEvent, DragEvent } from "react";
import Link from "next/link";
import { ArrowLeft, Trash2, Plus, Briefcase, RefreshCw } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import type { User } from "@supabase/supabase-js";

type JobStatus = "Applied" | "In Progress" | "Offers" | "Closed";

interface Job {
  id: string;
  company_name: string;
  role: string;
  status: JobStatus;
  notes?: string;
  created_at?: string;
}

const COLUMNS: { id: JobStatus; title: string; emoji: string; color: string }[] = [
  { id: "Applied", title: "Applied", emoji: "🔵", color: "border-blue-500/30 bg-blue-500/5 text-blue-400" },
  { id: "In Progress", title: "In Progress", emoji: "🟡", color: "border-yellow-500/30 bg-yellow-500/5 text-yellow-400" },
  { id: "Offers", title: "Offers", emoji: "🟢", color: "border-emerald-500/30 bg-emerald-500/5 text-emerald-400" },
  { id: "Closed", title: "Closed", emoji: "🔴", color: "border-red-500/30 bg-red-500/5 text-red-400" },
];

export default function JobTracker() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [newCompany, setNewCompany] = useState("");
  const [newRole, setNewRole] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    async function checkUserAndFetchJobs() {
      const { data: { session } } = await supabase.auth.getSession();
      const currentUser = session?.user ?? null;
      setUser(currentUser);

      if (currentUser) {
        // Fetch jobs for this user
        const { data, error } = await supabase
          .from("job_applications")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Error fetching jobs:", error);
        } else if (data) {
          setJobs(data as Job[]);
        }
      }
      setLoading(false);
    }

    checkUserAndFetchJobs();
  }, []);

  const handleAddJob = async (e: FormEvent) => {
    e.preventDefault();
    if (!user || !newCompany.trim() || !newRole.trim()) return;

    setIsAdding(true);
    
    const newJob = {
      user_id: user.id, // Good practice for RLS
      company_name: newCompany.trim(),
      role: newRole.trim(),
      status: "Applied" as JobStatus,
      notes: "Just applied",
    };

    const { data, error } = await supabase
      .from("job_applications")
      .insert([newJob])
      .select()
      .single();

    if (error) {
      console.error("Error adding job:", error);
      alert("Failed to add job.");
    } else if (data) {
      setJobs([data as Job, ...jobs]);
      setNewCompany("");
      setNewRole("");
      setShowForm(false);
    }
    
    setIsAdding(false);
  };

  const handleDeleteJob = async (id: string) => {
    // Optimistic UI update
    const previousJobs = [...jobs];
    setJobs(jobs.filter((j) => j.id !== id));

    const { error } = await supabase
      .from("job_applications")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Error deleting job:", error);
      setJobs(previousJobs); // Revert on failure
    }
  };

  // Drag and Drop Handlers
  const handleDragStart = (e: DragEvent<HTMLDivElement>, jobId: string) => {
    e.dataTransfer.setData("jobId", jobId);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // Required to allow drop
  };

  const handleDrop = async (e: DragEvent<HTMLDivElement>, newStatus: JobStatus) => {
    e.preventDefault();
    const jobId = e.dataTransfer.getData("jobId");
    if (!jobId) return;

    const jobToUpdate = jobs.find((j) => j.id === jobId);
    if (!jobToUpdate || jobToUpdate.status === newStatus) return;

    // Optimistic UI update
    const previousJobs = [...jobs];
    setJobs(jobs.map((j) => (j.id === jobId ? { ...j, status: newStatus } : j)));

    // API Call
    const { error } = await supabase
      .from("job_applications")
      .update({ status: newStatus })
      .eq("id", jobId);

    if (error) {
      console.error("Error updating job status:", error);
      setJobs(previousJobs); // Revert on failure
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <RefreshCw className="h-6 w-6 text-emerald-500 animate-spin" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen w-full bg-zinc-950 text-zinc-100 flex flex-col items-center justify-center p-6">
        <Briefcase className="h-16 w-16 text-zinc-800 mb-6" />
        <h1 className="text-3xl font-bold text-white mb-4">Placement Command Center</h1>
        <p className="text-zinc-400 max-w-md text-center mb-8 text-balance">
          Track your job applications, interview processes, and offers in one place. Please log in to access your Kanban board.
        </p>
        <Link href="/" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-2.5 rounded-lg transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Roadmap
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1 mt-4 sm:mt-0">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-emerald-400 transition-colors mb-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Roadmap
            </Link>
            <h1 className="text-3xl font-black tracking-tight text-white flex items-center gap-3">
              Placement <span className="text-emerald-500">Command Center</span>
            </h1>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md font-semibold transition-colors mt-2 sm:mt-0"
          >
            {showForm ? "Cancel" : <><Plus className="h-4 w-4" /> Add Application</>}
          </button>
        </div>

        {/* Add Job Form */}
        {showForm && (
          <form onSubmit={handleAddJob} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex flex-col sm:flex-row gap-4 items-end animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="w-full sm:w-1/3">
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1.5">Company Name</label>
              <input
                type="text"
                required
                value={newCompany}
                onChange={(e) => setNewCompany(e.target.value)}
                placeholder="e.g. Amazon"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              />
            </div>
            <div className="w-full sm:w-1/3">
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1.5">Role / Position</label>
              <input
                type="text"
                required
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}
                placeholder="e.g. SDE Intern"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              />
            </div>
            <div className="w-full sm:w-auto mt-2 sm:mt-0">
              <button
                type="submit"
                disabled={isAdding}
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-medium px-6 py-2.5 rounded-lg transition-colors flex items-center justify-center"
              >
                {isAdding ? "Adding..." : "Save"}
              </button>
            </div>
          </form>
        )}

        {/* Kanban Board */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {COLUMNS.map((col) => {
            const columnJobs = jobs.filter((j) => j.status === col.id);
            return (
              <div
                key={col.id}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, col.id)}
                className="flex flex-col gap-3 min-h-[500px]"
              >
                {/* Column Header */}
                <div className={`flex items-center justify-between px-3 py-2 rounded-lg border ${col.color}`}>
                  <div className="font-bold flex items-center gap-2 text-sm uppercase tracking-wider">
                    <span>{col.emoji}</span>
                    {col.title}
                  </div>
                  <span className="text-xs font-black bg-zinc-950/50 px-2 py-0.5 rounded-full">{columnJobs.length}</span>
                </div>

                {/* Cards Container */}
                <div className="flex-1 rounded-xl bg-zinc-900/30 border border-zinc-800/50 p-2 space-y-3">
                  {columnJobs.map((job) => (
                    <div
                      key={job.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, job.id)}
                      className="bg-zinc-950 border border-zinc-800 rounded-lg p-4 cursor-grab hover:border-zinc-700 transition-colors group shadow-sm"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <h3 className="font-semibold text-zinc-100 truncate">{job.company_name}</h3>
                          <p className="text-sm text-zinc-400 truncate mt-0.5">{job.role}</p>
                        </div>
                        <button
                          onClick={() => handleDeleteJob(job.id)}
                          className="text-zinc-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity p-1"
                          title="Delete application"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                  {columnJobs.length === 0 && (
                    <div className="h-24 flex items-center justify-center border-2 border-dashed border-zinc-800/50 rounded-lg text-sm font-medium text-zinc-600">
                      Drop here
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
