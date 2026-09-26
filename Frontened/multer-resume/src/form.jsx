import Swal from "sweetalert2";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Form() {
  const navigate = useNavigate();

  let [files, setFiles] = useState({
    name: "",
    email: "",
    skills: "",
    address: "",
    Github: "",
    Role: "",
    About: "",
    Linkedin: "",
    photo: null,
  });

  let handleSubmit = (e) => {
    e.preventDefault();

    if (
      !files.photo ||
      !files.name ||
      !files.email ||
      !files.skills ||
      !files.address ||
      !files.Github ||
      !files.Role ||
      !files.About ||
      !files.Linkedin
    ) {
      Swal.fire({
        title: "Error!",
        text: "Field is required ",
        icon: "error",
        confirmButtonText: "Cool",
      });
      
    }

    let data = new FormData();

    data.append("photo", files.photo);
    data.append("name", files.name);
    data.append("email", files.email);
    data.append("skills", files.skills);
    data.append("address", files.address);
    data.append("Github", files.Github);
    data.append("Linkedin", files.Linkedin);
    data.append("Role", files.Role);
    data.append("About", files.About);

    axios
      .post("http://localhost:3000/media/upload", data)
      .then((res) => {
           Swal.fire({
          title: "Resume Created!",
          text: "Your resume has been created successfully.",
          icon: "success",
          confirmButtonColor: "#6366f1",
          background: "#ffffff",
        });

        navigate(`/resume/${res.data.obj._id}`);
      })
      .catch((err) => {
         Swal.fire({
        title: "Error!",
        text: "Something is required",
        icon: "error",
        confirmButtonText: "Cool",
      });
      });
  };

  let input = (e) => {
    let name = e.target.name;

    setFiles({
      ...files,
      [name]: name === "photo" ? e.target.files[0] : e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#f8f5f0] px-4 py-10">
      <div className="mx-auto max-w-4xl">
        {/* ================= HEADER ================= */}
        <div className="mb-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#dff3e6] px-4 py-2 text-sm font-semibold text-[#176b45]">
            <span className="h-2 w-2 rounded-full bg-[#2f9e68]"></span>
            Resume Builder
          </div>

          <h1 className="text-4xl font-black tracking-tight text-[#171717] sm:text-5xl">
            Build a resume that
            <span className="text-[#218653]"> represents you.</span>
          </h1>

          <p className="mt-4 max-w-2xl text-[#66615b]">
            Add your professional information, skills and links to create a
            clean and professional resume.
          </p>
        </div>

        {/* ================= FORM ================= */}
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="overflow-hidden rounded-[28px] border border-[#e5ddd4] bg-white shadow-[0_20px_60px_rgba(30,30,30,0.08)]"
        >
          {/* ================= PERSONAL ================= */}
          <div className="border-b border-[#eee7df] p-6 sm:p-9">
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#191919] font-bold text-[#ffd8c7]">
                01
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#171717]">
                  Personal Information
                </h2>

                <p className="text-sm text-[#8a847e]">
                  Tell us a little about yourself
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {/* NAME */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#292929]">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  onChange={input}
                  placeholder="Hoorain Nadeem"
                  className="w-full rounded-xl border border-[#e5ddd4] bg-[#fcfaf7] px-4 py-3 text-[#171717] outline-none transition placeholder:text-[#aaa39b] focus:border-[#2f9e68] focus:bg-white focus:ring-4 focus:ring-[#2f9e68]/10"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#292929]">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  onChange={input}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-[#e5ddd4] bg-[#fcfaf7] px-4 py-3 text-[#171717] outline-none transition placeholder:text-[#aaa39b] focus:border-[#2f9e68] focus:bg-white focus:ring-4 focus:ring-[#2f9e68]/10"
                />
              </div>

              {/* ADDRESS */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-[#292929]">
                  Address
                </label>

                <input
                  type="text"
                  name="address"
                  onChange={input}
                  placeholder="Karachi, Pakistan"
                  className="w-full rounded-xl border border-[#e5ddd4] bg-[#fcfaf7] px-4 py-3 text-[#171717] outline-none transition placeholder:text-[#aaa39b] focus:border-[#2f9e68] focus:bg-white focus:ring-4 focus:ring-[#2f9e68]/10"
                />
              </div>
            </div>
          </div>

          {/* ================= PROFESSIONAL ================= */}
          <div className="border-b border-[#eee7df] bg-[#fffaf6] p-6 sm:p-9">
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f8cdbb] font-bold text-[#191919]">
                02
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#171717]">
                  Professional Information
                </h2>

                <p className="text-sm text-[#8a847e]">
                  Highlight your professional identity
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {/* ROLE */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#292929]">
                  Professional Role
                </label>

                <input
                  type="text"
                  name="Role"
                  onChange={input}
                  placeholder="Frontend Developer"
                  className="w-full rounded-xl border border-[#e5ddd4] bg-white px-4 py-3 text-[#171717] outline-none transition placeholder:text-[#aaa39b] focus:border-[#2f9e68] focus:ring-4 focus:ring-[#2f9e68]/10"
                />
              </div>

              {/* SKILLS */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#292929]">
                  Skills
                </label>

                <input
                  type="text"
                  name="skills"
                  onChange={input}
                  placeholder="React, JavaScript, HTML, CSS, Tailwind CSS"
                  className="w-full rounded-xl border border-[#e5ddd4] bg-white px-4 py-3 text-[#171717] outline-none transition placeholder:text-[#aaa39b] focus:border-[#2f9e68] focus:ring-4 focus:ring-[#2f9e68]/10"
                />

                <p className="mt-2 text-xs text-[#8a847e]">
                  Separate your skills using commas.
                </p>
              </div>

              {/* ABOUT */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#292929]">
                  About You
                </label>

                <textarea
                  name="About"
                  onChange={input}
                  rows="5"
                  placeholder="Write a short professional summary..."
                  className="w-full resize-none rounded-xl border border-[#e5ddd4] bg-white px-4 py-3 text-[#171717] outline-none transition placeholder:text-[#aaa39b] focus:border-[#2f9e68] focus:ring-4 focus:ring-[#2f9e68]/10"
                />
              </div>
            </div>
          </div>

          {/* ================= LINKS ================= */}
          <div className="border-b border-[#eee7df] p-6 sm:p-9">
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#dff3e6] font-bold text-[#176b45]">
                03
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#171717]">
                  Professional Links
                </h2>

                <p className="text-sm text-[#8a847e]">
                  Let people find your work online
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {/* GITHUB */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#292929]">
                  GitHub
                </label>

                <input
                  type="url"
                  name="Github"
                  onChange={input}
                  placeholder="https://github.com/username"
                  className="w-full rounded-xl border border-[#e5ddd4] bg-[#fcfaf7] px-4 py-3 text-[#171717] outline-none transition placeholder:text-[#aaa39b] focus:border-[#2f9e68] focus:bg-white focus:ring-4 focus:ring-[#2f9e68]/10"
                />
              </div>

              {/* LINKEDIN */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#292929]">
                  LinkedIn
                </label>

                <input
                  type="url"
                  name="Linkedin"
                  onChange={input}
                  placeholder="https://linkedin.com/in/username"
                  className="w-full rounded-xl border border-[#e5ddd4] bg-[#fcfaf7] px-4 py-3 text-[#171717] outline-none transition placeholder:text-[#aaa39b] focus:border-[#2f9e68] focus:bg-white focus:ring-4 focus:ring-[#2f9e68]/10"
                />
              </div>
            </div>
          </div>

          {/* ================= PHOTO ================= */}
          <div className="border-b border-[#eee7df] bg-[#191919] p-6 sm:p-9">
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f8cdbb] font-bold text-[#191919]">
                04
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">Profile Photo</h2>

                <p className="text-sm text-[#aaa39b]">
                  Add a professional profile picture
                </p>
              </div>
            </div>

            <label className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#4a4a4a] bg-[#232323] px-6 py-10 text-center transition hover:border-[#6bcf98] hover:bg-[#292929]">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#f8cdbb] text-2xl">
                📷
              </div>

              <p className="font-semibold text-white">
                Click to upload your photo
              </p>

              <p className="mt-1 text-sm text-[#8f8f8f]">PNG, JPG or JPEG</p>

              <input
                type="file"
                name="photo"
                accept="image/png,image/jpeg,image/jpg"
                onChange={input}
                className="hidden"
              />
            </label>

            {files.photo && (
              <p className="mt-3 text-center text-sm text-[#8ee0b0]">
                ✓ {files.photo.name}
              </p>
            )}
          </div>

          {/* ================= SUBMIT ================= */}
          <div className="flex flex-col items-center justify-between gap-5 bg-[#f8f5f0] px-6 py-7 sm:flex-row sm:px-9">
            <div>
              <p className="font-semibold text-[#191919]">
                Ready to create your resume?
              </p>

              <p className="mt-1 text-xs text-[#8a847e]">
                You can review your information on the next page.
              </p>
            </div>

            <button
              type="submit"
              className="group w-full rounded-xl bg-[#191919] px-8 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#218653] hover:shadow-[#218653]/20 active:translate-y-0 sm:w-auto"
            >
              Create Resume
              <span className="ml-2 transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
