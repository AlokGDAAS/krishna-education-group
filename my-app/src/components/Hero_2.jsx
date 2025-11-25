import React from "react";
import Container from "./Container";

function Badge({ children }) {
  return (
    <span
      className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-semibold"
      style={{ background: "var(--light)", color: "var(--neutral)" }}
    >
      {children}
    </span>
  );
}

const Hero_2 = () => {
  return (
    <div>
      <section className="py-4 sm:py-12 bg-gradient-to-b from-white to-slate-50 my-4 rounded shadow-lg">
        <Container>
          <div className="grid gap-8 items-center md:grid-cols-2">
            <div>
              <Badge>Free Guidance • Since 2020</Badge>
              <h2
                className="mt-4 text-2xl sm:text-4xl font-extrabold leading-snug text-gray-800"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Krishna Education Group: —<br />A Step Towards Success.
              </h2>
              <p
                className="mt-3 text-sm sm:text-base text-slate-700 max-w-xl"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Krishna Education Group provides free, quality guidance with
                mentorship.
              </p>
            </div>

            <div className="p-4 bg-white rounded-xl shadow-lg">
              <img
                src="stu_3.jpg"
                alt="students learning"
                className="w-full rounded-lg h-48 sm:h-64 object-cover"
              />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Hero_2;