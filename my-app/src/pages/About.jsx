import React from "react";

const About = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-20 text-gray-800 leading-relaxed bg-white rounded mb-4 shadow-lg">
      {/* Who We Are */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-slate-700 mb-3">Who We Are</h2>
        <p className=" font-semibold mb-2  text-sm  text-slate-800 ">
          Established: 2020
        </p>
        <p  className=" mb-2  md:text-sm text-xs text-slate-800 ">
          Education is not merely the exchange of information; it is a
          transformative journey that unlocks potential and turns dreams into
          reality. With this philosophy at its core, Krishna Education Group was
          founded in 2020.
        </p>
      </div>

      {/* Purpose & Philosophy */}
      <div className="mb-5">
        <h3 className="text-xl font-bold text-slate-700 mb-3">
          A Noble Beginning: Purpose and Philosophy
        </h3>
        <p  className=" mb-2  md:text-sm text-xs text-slate-800 ">
          The foundation of Krishna Education Group was never driven by
          commercial motives. The inspiration behind it was purely social — to
          provide all necessary information and proper guidance to our members
          so they can achieve their true potential.
          <br />
          <br />
          Today, we stand as a united group, inspiring students to chase their
          goals with confidence and determination. We support one another
          financially, emotionally, and academically, and we share resources
          that reduce our financial burdens without compromising the quality of
          our preparation — making our journey rock-solid and our future
          brighter.
        </p>
      </div>
      {/* Current Growth */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-slate-700 mb-3">
          Our Current Journey: A Story of Growth
        </h3>
        <p  className=" mb-2  md:text-sm text-xs text-slate-800 ">
          What began with just a few students and limited resources has now
          grown into a strong educational community. Our dedication, the hard
          work of our mentors, and the trust of our members have brought us
          here.
        </p>

        <div className="mt-5">
          <h4 className="text-xl font-semibold text-green-600">
            500+ Active Students
          </h4>
          <p  className=" mb-2  md:text-sm text-xs text-slate-800 ">
            Currently, over 500 students are preparing with us — a strong
            testimony to our quality and popularity.
          </p>
        </div>

        <div className="mt-5">
          <h4 className="text-xl font-semibold text-green-600">
            30+ Successful Selections
          </h4>
          <p  className=" mb-2  md:text-sm text-xs text-slate-800 ">
            More than 30 students have secured government jobs and admissions in
            reputed institutions — turning dreams into reality.
          </p>
        </div>
      </div>


      {/* Why Choose Us */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-slate-700 mb-3">
          Why Choose Krishna Education Group?
        </h3>
        <p className="mb-3  md:text-sm text-xs text-slate-800  ">
          Krishna Education Group is not a coaching center — it’s a
          community.
        </p>

        <ul className="list-disc ml-6 space-y-2 mb-2  md:text-sm text-xs text-slate-800 ">
          <li>Free & Quality Guidance — No compromise in standards</li>
          <li>Personal Attention — Tracking each student’s progress</li>
          <li>Holistic Development — Skills & confidence building</li>
          <li>Modern Infrastructure — Digital classrooms and study resources (we are continuously working to achieve this goal)</li>
          <li>Family-Like Atmosphere — Open support & mentoring</li>
        </ul>
      </div>

      {/* Conclusion: Join Us */}
      <div className="border-t pt-8">
        <h3 className="text-xl font-bold text-slate-700 mb-3">
          A Call to Join the Movement
        </h3>
        <p className="mb-3 md:text-sm text-xs text-slate-800 ">
          Our mission is to ensure no talented student is deprived of
          opportunities. We continue to move forward with strong goals and
          stronger determination.
        </p>
        <p className="font-semibold">
          Join us — whether you’re a student shaping your future or someone who
          wants to support this noble cause.
        </p>
      </div>
    </section>
  );
};

export default About;
