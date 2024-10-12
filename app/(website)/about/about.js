import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  return (
    <Container>
      <h1
        className="text-brand-primary mb-12 mt-2 text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        About Us
      </h1>
      <div className=" mb-8">
        <p className="text-lg">Master in Medical Physics Alumni Association</p>
      </div>

      <div className="mx-auto mt-14 mb-14 dark:prose-invert">
        <p className="my-4">
          The Medical Physics Alumni Association is a community of professionals who have graduated from ICTP –
          University of Trieste master medical physics program. Members of the association are committed to staying
          connected with their peers and advancing the field of medical physics through research, education, and
          collaboration.
        </p>

        <p className="my-4">
          Through the Medical Physics Alumni Association, members have access to a network of professionals who share
          their passion for the field. The association provides opportunities for members to connect with one another,
          attend conferences and workshops, and stay up-to-date on the latest developments in medical physics.
        </p>
      </div>

      <hr className="my-8" />


      <div className="flex items-center justify-center my-10">
        <div className="w-1/3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Marie_Curie_%281900%29.jpg/220px-Marie_Curie_%281900%29.jpg"
            alt="Marie Curie"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-2/3 pl-8">
          <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">
            "A scientist in his laboratory is not a mere technician: he is also a child confronting natural phenomena
            that impress him as though they were fairy tales."
            <br /> — Marie Curie
          </p>
        </div>
      </div>


      <hr className="my-8" />

      <div className=" mb-8">
        <p className="text-lg">Mission Statement</p>
      </div>

      <div className="mx-auto mt-14 mb-14 dark:prose-invert">
        <p>
          The primary mission of the MMPAA is to ensure the continuous connection, exchange of experience and
          professional/academic support among alumni of the master’s degree in medical physics at ICTP and Trieste
          University. It promotes excellence, innovation, professional collaboration, recognition of medical physics in
          healthcare and safety in the practice of radiation therapy, nuclear medicine, and imaging diagnostic among
          others disciplines in medical physics.
        </p>
      </div>

      <hr className="my-8" />

      <div className="my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg">
            <h3 className="text-3xl font-bold text-brand-primary">75+</h3>
            <p>Active MMPAA Members</p>
          </div>
          <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg">
            <h3 className="text-3xl font-bold text-brand-primary">30+</h3>
            <p>Activities per year</p>
          </div>
          <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg">
            <h3 className="text-3xl font-bold text-brand-primary">12+</h3>
            <p>Countries</p>
          </div>
        </div>
      </div>

      <hr className="my-8" />

      <div className=" mb-14">
        <p className="text-lg">Our Core Values</p>
      </div>

      <p className="my-4"><strong>Ethics and Professionalism:</strong> Ethical conduct and professionalism are
        fundamental values for
        medical physicists. The association expects members to maintain the highest level of integrity, confidentiality,
        and respect for patients’ rights and autonomy.</p>


      <p className="my-4"><strong>Collaboration:</strong> We value the power of collaboration and teamwork. We foster an
        environment that
        encourages members to work together, share knowledge, and support one another in achieving common goals.</p>

      <p className="my-4"><strong>Education and Training:</strong> The association emphasizes the value of education and
        professional
        development. It strives to provide support, and continuing education opportunities, besides helping members
        enhance their knowledge and skills throughout their careers.</p>

      <p className="my-4"><strong>Diversity and Inclusion:</strong> We recognize and appreciate the importance of
        diversity and inclusion
        within our profession. We strive to create an inclusive environment that respects and values individuals from
        different backgrounds, experiences, and perspectives.</p>

      <p className="my-4"><strong>Innovation and Research:</strong> The association recognizes the importance of
        innovation and research
        in advancing medical physics. Members are encouraged to contribute to scientific research, explore new
        technologies, and promote evidence-based practices in the field.</p>

      <p className="my-4"><strong>Safety and Quality Assurance:</strong> Patient safety and quality assurance are
        paramount in medical
        physics. The association promotes the implementation of rigorous quality control measures, adherence to safety
        protocols, and continuous monitoring to ensure accurate and safe delivery of medical radiation and imaging
        procedures.</p>

      <p className="my-4"><strong>Patient-Centered Care:</strong> We emphasize the importance of providing high-quality
        care that
        prioritizes the well-being and safety of patients. Members are expected to uphold the highest standards of
        professionalism and ethics in delivering medical physics services.</p>

      <p className="my-4"><strong>Interdisciplinary Approach:</strong> Medical physics often involves collaboration with
        other healthcare
        professionals, such as radiologists, oncologists, and technologists. The association promotes interdisciplinary
        teamwork and effective communication to achieve optimal patient outcomes.</p>

      <p className="my-4"><strong>Advocacy and Public Awareness:</strong> The association may advocate for the
        recognition and importance
        of medical physics in healthcare. It may work towards promoting public awareness of the role and impact of
        medical physicists in patient care, radiation safety, and radiation therapy.</p>


      <hr className="my-8" />

    </Container>
  );
}
