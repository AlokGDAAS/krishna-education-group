import React from "react";
import Container from "./Container";

const VisionMission = () => {
  return (
    <div>
      {/* Impact */}
      <div className="py-5 bg-slate-50 my-2">
        <Container>
          <div>
            <div className="">
              <div className="mt-5 bg-white shadow-lg p-4 rounded">
                <h3 className="text-2xl font-bold text-slate-700 mb-3">
                  Our Current Journey: A Story of Growth
                </h3>
                <p  className="text-xs sm:text-sm text-slate-800 p-2">
                  What began with just a few students and limited resources has
                  now grown into a strong educational community. Our dedication,
                  the hard work of our mentors, and the trust of our members
                  have brought us here.
                </p>
              </div>

              <div className="mt-5 bg-white shadow-lg p-4 rounded">
                <h4 className="text-xl font-semibold text-green-600">
                  500+ Active Students
                </h4>
                <p className="text-xs sm:text-sm text-slate-800 p-2">
                  Currently, over 500 students are preparing with us — a strong
                  testimony to our quality and popularity.
                </p>
              </div>
              <div className="mt-5 bg-white shadow-lg p-4 rounded">
                <h4 className="text-xl font-semibold text-green-600">
                  30+ Successful Selections
                </h4>
                <p className="text-xs sm:text-sm text-slate-800 p-2">
                  More than 30 students have secured government jobs and
                  admissions in reputed institutions — turning dreams into
                  reality.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* Vision 2027 */}
      <div className="py-5 bg-slate-50 my-2">
        <Container>
          <div>
            <div className="my-5 bg-white shadow-lg p-4 rounded">
              <h3 className="text-2xl font-bold text-slate-700 mb-3">
                Vision 2027
              </h3>
              <h4 className="text-xl font-semibold mb-3">Our Goals by 2027:</h4>

              <ul className="list-disc ml-6 space-y-2 text-xs sm:text-sm text-slate-800 p-2">
                <li>
                  <strong>100+ Final Selections:</strong> Helping students
                  secure their dream careers in government & competitive
                  sectors.
                </li>
                <li>
                  <strong>Educate 2000+ Students:</strong> Both online & offline
                  learning to break geographical and financial barriers.
                </li>
              </ul>

              <p className="mt-4 text-xs sm:text-sm text-slate-800 p-2">
                We continuously modernize our teaching methods and create a
                supportive, inclusive learning environment.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Mission */}
      <div className="py-10 bg-slate-50 my-2">
        <Container>
          <div>
            <div className="bg-white shadow-lg p-4 rounded">
              <h3 className="text-2xl font-bold text-slate-700 mb-3">Mission</h3>
              <p className="text-xs sm:text-sm text-slate-800 p-2">
                Our primary goal is to offer free guidance and support to
                students. We believe that talent should not be limited by
                geography or financial background. Every deserving student must
                receive equal opportunities to move forward.
                <br />
                <br />
                During the pandemic in 2020, we realized that students also need
                motivation and the right direction to choose their career path
                while facing mental challenges during exam preparation. Krishna
                Education Group became a symbol of this holistic support.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Our Approach */}
      <div className="py-10 bg-slate-50 my-2">
        <Container>
          <div>
            <div className="bg-white shadow-lg p-4 rounded">
              <h3 className="text-2xl font-bold text-slate-700 mb-3">
                Our Approach
              </h3>
              <ul className="ml-8 list-disc space-y-1 text-xs sm:text-sm text-slate-800 p-2">
                <li>Free guidance</li>
                <li>Regular practice tests</li>
                <li>Personalized mentoring</li>
                <li>Mental-health support during exam preparation</li>
                <li>Soft-skill development</li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default VisionMission;