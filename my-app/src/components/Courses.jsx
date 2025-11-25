import React from 'react'
import Container from './Container';

const Courses = () => {
    const courses = ["PCS", "RO/ARO", "Lower PCS", "Other State PCS", "O Level","All Competitive Examinations"];
  return (
    <div>
            <section id="courses" className="py-10 bg-slate-50">
      <Container>
        <h3 className="text-xl sm:text-2xl font-bold" style={{ fontFamily: "Inter, sans-serif" }}>
          Courses & Programs
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-slate-600">Online & offline batches.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c) => (
            <div key={c} className="md:p-5 p-4 bg-white rounded-xl shadow">
              <h4 className="font-semibold text-sm sm:text-base">{c}</h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">Syllabus + mentorship.</p>
              <div className="mt-3">

              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
    </div>
  )
}

export default Courses