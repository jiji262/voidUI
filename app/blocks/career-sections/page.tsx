"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Text, Button, Card, Badge } from "@/components/retroui";
import {
  ArrowRightIcon,
  MapPinIcon,
  ClockIcon,
  DollarSignIcon,
  UsersIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  HeartIcon,
  TrendingUpIcon
} from "lucide-react";
import { CodeDisplay } from "@/components/CodeDisplay";

// Code snippet for job listings component
const jobListingsCode = `import React from "react";
import { Button } from "@/components/retroui";
import { MapPinIcon, ClockIcon, DollarSignIcon, ArrowRightIcon } from "lucide-react";

const JobListings = () => {
  const jobs = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $160k",
      description: "Join our frontend team to build amazing user experiences with React and TypeScript.",
      requirements: ["5+ years React experience", "TypeScript proficiency", "UI/UX design skills"],
      posted: "2 days ago"
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      salary: "$130k - $170k",
      description: "Lead product strategy and work with cross-functional teams to deliver exceptional products.",
      requirements: ["3+ years PM experience", "Technical background", "Data-driven mindset"],
      posted: "1 week ago"
    },
    {
      title: "UX Designer",
      department: "Design",
      location: "New York, NY",
      type: "Full-time",
      salary: "$90k - $120k",
      description: "Create intuitive and delightful user experiences for our growing platform.",
      requirements: ["Portfolio of UX work", "Figma expertise", "User research experience"],
      posted: "3 days ago"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white border-2 border-black rounded-lg p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Open Positions</h3>
        <p className="text-gray-600">Join our team and help us build the future</p>
      </div>

      <div className="space-y-6">
        {jobs.map((job, index) => (
          <div key={index} className="border-2 border-black rounded-lg p-6 bg-gray-50">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-3">
                  <div>
                    <h4 className="text-lg font-bold">{job.title}</h4>
                    <span className="inline-block bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full border border-blue-300">
                      {job.department}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{job.description}</p>

                <div className="flex flex-wrap gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1">
                    <MapPinIcon className="h-4 w-4 text-gray-500" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ClockIcon className="h-4 w-4 text-gray-500" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSignIcon className="h-4 w-4 text-gray-500" />
                    <span>{job.salary}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="font-semibold mb-2">Requirements:</h5>
                  <ul className="space-y-1">
                    {job.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="text-sm text-gray-600">• {req}</li>
                    ))}
                  </ul>
                </div>

                <p className="text-xs text-gray-500">Posted {job.posted}</p>
              </div>

              <div className="flex flex-col gap-2 lg:ml-4">
                <Button className="bg-black text-white hover:bg-gray-800">
                  Apply Now
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-black">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};`;

// Job Listings Component
const JobListings = () => {
  const jobs = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $160k",
      description: "Join our frontend team to build amazing user experiences with React and TypeScript.",
      requirements: ["5+ years React experience", "TypeScript proficiency", "UI/UX design skills"],
      posted: "2 days ago"
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      salary: "$130k - $170k",
      description: "Lead product strategy and work with cross-functional teams to deliver exceptional products.",
      requirements: ["3+ years PM experience", "Technical background", "Data-driven mindset"],
      posted: "1 week ago"
    },
    {
      title: "UX Designer",
      department: "Design",
      location: "New York, NY",
      type: "Full-time",
      salary: "$90k - $120k",
      description: "Create intuitive and delightful user experiences for our growing platform.",
      requirements: ["Portfolio of UX work", "Figma expertise", "User research experience"],
      posted: "3 days ago"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white border-2 border-black rounded-lg p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Open Positions</h3>
        <p className="text-gray-600">Join our team and help us build the future</p>
      </div>

      <div className="space-y-6">
        {jobs.map((job, index) => (
          <div key={index} className="border-2 border-black rounded-lg p-6 bg-gray-50">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-3">
                  <div>
                    <h4 className="text-lg font-bold">{job.title}</h4>
                    <span className="inline-block bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full border border-blue-300">
                      {job.department}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{job.description}</p>

                <div className="flex flex-wrap gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1">
                    <MapPinIcon className="h-4 w-4 text-gray-500" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ClockIcon className="h-4 w-4 text-gray-500" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSignIcon className="h-4 w-4 text-gray-500" />
                    <span>{job.salary}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="font-semibold mb-2">Requirements:</h5>
                  <ul className="space-y-1">
                    {job.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="text-sm text-gray-600">• {req}</li>
                    ))}
                  </ul>
                </div>

                <p className="text-xs text-gray-500">Posted {job.posted}</p>
              </div>

              <div className="flex flex-col gap-2 lg:ml-4">
                <Button className="bg-black text-white hover:bg-gray-800">
                  Apply Now
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-black">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function CareerSectionsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="container max-w-6xl mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Career <span className="bg-yellow-300 px-2 py-1 transform -rotate-1 inline-block">Sections</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Job listings and career page components for recruiting top talent.
            Perfect for company career pages and job boards.
          </p>
        </div>
      </section>

      {/* Career Blocks */}
      <section className="container max-w-6xl mx-auto px-6 py-16 space-y-16">

        {/* Job Listings */}
        <div className="space-y-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 bg-gray-50">
            <JobListings />
          </div>
          <CodeDisplay title="Job Listings" code={jobListingsCode} />
        </div>

      </section>

      {/* Back to Blocks */}
      <section className="container max-w-6xl mx-auto px-6 pb-16">
        <div className="text-center">
          <Link href="/blocks">
            <Button variant="outline" className="font-head">
              ← Back to All Blocks
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}