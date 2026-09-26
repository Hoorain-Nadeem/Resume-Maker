import axios from "axios";
import Swal from "sweetalert2";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Resume() {
  const [loading, setLoading] = useState(true);
  const [Data, setData] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const getResume = async () => {
      try {
        setLoading(true);

        const res = await axios.get(`http://localhost:3000/media/resume/${id}`);

        setData(res.data.data);
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: error,
          icon: "error",
          confirmButtonText: "Cool",
        });
        console.log("ERROR:", error);
      } finally {
        setLoading(false);
      }
    };

    getResume();
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f8f5f0]">
        <div className="text-center">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-[#dff3e6] border-t-[#218653]"></div>

          <p className="font-medium text-[#55514c]">Preparing your resume...</p>
        </div>
      </div>
    );
  }

  if (!Data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f8f5f0]">
        <div className="rounded-2xl bg-white px-8 py-6 text-center shadow-lg">
          <h1 className="text-xl font-bold text-[#191919]">Resume not found</h1>

          <p className="mt-2 text-[#77716b]">
            We couldn't find the resume you're looking for.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f5f0] px-4 py-8 sm:px-6 lg:px-8">
      {/* Resume */}
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[28px] border border-[#e5ddd4] bg-white shadow-[0_20px_60px_rgba(30,30,30,0.10)]">
        {/* ================= HEADER ================= */}
        <header className="relative overflow-hidden bg-[#191919] px-7 py-10 sm:px-10 md:px-14">
          {/* Decorative peach circle */}
          <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-[#f8cdbb] opacity-90"></div>

          {/* Decorative green circle */}
          <div className="absolute -bottom-24 right-20 h-40 w-40 rounded-full bg-[#218653] opacity-60"></div>

          <div className="relative flex flex-col gap-7 sm:flex-row sm:items-center">
            {/* Profile Image */}
            <div className="shrink-0">
              <div className="rounded-full border-4 border-[#f8cdbb] p-1">
                <img
                  src={`data:${Data?.mimetype};base64,${Data?.photo}`}
                  alt={Data?.name}
                  className="h-32 w-32 rounded-full object-cover"
                />
              </div>
            </div>

            {/* Personal Information */}
            <div className="text-white">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#f8cdbb]">
                Professional Resume
              </p>

              <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
                {Data?.name}
              </h1>

              <p className="mt-2 text-xl font-semibold text-[#70c996]">
                {Data?.Role}
              </p>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#d5d2ce]">
                {Data?.About}
              </p>
            </div>
          </div>
        </header>

        {/* ================= BODY ================= */}
        <div className="grid md:grid-cols-[280px_1fr]">
          {/* ================= SIDEBAR ================= */}
          <aside className="bg-[#f8f5f0] px-7 py-9 sm:px-9">
            {/* Contact */}
            <section>
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#191919] text-sm font-bold text-[#f8cdbb]">
                  01
                </span>

                <h2 className="text-sm font-black uppercase tracking-[0.18em] text-[#191919]">
                  Contact
                </h2>
              </div>

              <div className="space-y-5">
                {/* Email */}
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#218653]">
                    Email
                  </p>

                  <p className="break-all text-sm leading-6 text-[#55514c]">
                    {Data?.email}
                  </p>
                </div>

                {/* Address */}
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#218653]">
                    Address
                  </p>

                  <p className="text-sm leading-6 text-[#55514c]">
                    {Data?.address}
                  </p>
                </div>

                {/* Github */}
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#218653]">
                    GitHub
                  </p>

                  {Data?.Github && (
                    <a
                      href={Data.Github}
                      target="_blank"
                      rel="noreferrer"
                      className="break-all text-sm leading-6 text-[#55514c] transition hover:text-[#218653] hover:underline"
                    >
                      {Data.Github}
                    </a>
                  )}
                </div>

                {/* LinkedIn */}
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#218653]">
                    LinkedIn
                  </p>

                  {Data?.Linkedin && (
                    <a
                      href={Data.Linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="break-all text-sm leading-6 text-[#55514c] transition hover:text-[#218653] hover:underline"
                    >
                      {Data.Linkedin}
                    </a>
                  )}
                </div>
              </div>
            </section>

            {/* Divider */}
            <div className="my-8 h-px bg-[#ded8d0]"></div>

            {/* Skills */}
            <section>
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#218653] text-sm font-bold text-white">
                  02
                </span>

                <h2 className="text-sm font-black uppercase tracking-[0.18em] text-[#191919]">
                  Skills
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {Data?.skills?.split(",").map((skill, index) => (
                  <span
                    key={index}
                    className="rounded-lg border border-[#cde6d7] bg-[#dff3e6] px-3 py-2 text-xs font-semibold text-[#176b45]"
                  >
                    {skill.trim()}
                  </span>
                ))}
              </div>
            </section>
          </aside>

          {/* ================= MAIN CONTENT ================= */}
          <main className="px-7 py-9 sm:px-9 md:px-12">
            {/* About */}
            <section>
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f8cdbb] text-sm font-black text-[#191919]">
                  03
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#218653]">
                    Profile
                  </p>

                  <h2 className="text-2xl font-black text-[#191919]">
                    About Me
                  </h2>
                </div>
              </div>

              <div className="rounded-2xl border border-[#e8e1d9] bg-[#faf9f7] p-6">
                <p className="text-sm leading-7 text-[#55514c]">
                  {Data?.About}
                </p>
              </div>
            </section>

            {/* Professional Information */}
            <section className="mt-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#218653] text-sm font-black text-white">
                  04
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#218653]">
                    Professional
                  </p>

                  <h2 className="text-2xl font-black text-[#191919]">
                    Career Details
                  </h2>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {/* Role */}
                <div className="rounded-2xl border border-[#e8e1d9] bg-white p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#218653]">
                    Current Role
                  </p>

                  <p className="mt-2 font-bold text-[#191919]">{Data?.Role}</p>
                </div>

                {/* Location */}
                <div className="rounded-2xl border border-[#e8e1d9] bg-white p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#218653]">
                    Location
                  </p>

                  <p className="mt-2 font-bold text-[#191919]">
                    {Data?.address}
                  </p>
                </div>
              </div>
            </section>

            {/* Skills Overview */}
            <section className="mt-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#191919] text-sm font-black text-[#f8cdbb]">
                  05
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#218653]">
                    Expertise
                  </p>

                  <h2 className="text-2xl font-black text-[#191919]">
                    Core Skills
                  </h2>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {Data?.skills?.split(",").map((skill, index) => (
                  <div
                    key={index}
                    className="rounded-xl bg-[#191919] px-4 py-2.5 text-sm font-semibold text-white"
                  >
                    {skill.trim()}
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>

        {/* ================= FOOTER ================= */}
        <footer className="flex flex-col gap-2 border-t border-[#e5ddd4] bg-[#f8f5f0] px-7 py-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#77716b]">
            Professional Resume
          </p>

          <div className="flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#218653]"></span>

            <span className="text-xs font-medium text-[#77716b]">
              Built with Resume Builder
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
