import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";


export default function Faq({ authors, settings }) {
  return (
    <Container>
      <h1
        className="text-brand-primary mb-12 mt-2 text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        FAQ's
      </h1>

      <h3
        className="mb-12 mt-2 text-2xl font-semibold tracking-tight dark:text-white lg:leading-snug">
        What is Medical Physics?
      </h3>

      <div className="mx-auto mt-14 mb-14 dark:prose-invert">
        <p className="my-4">
          Medical Physics is a branch of applied physics that utilizes principles of physics in healthcare settings. It
          involves the application of radiation in diagnosis, treatment, and research related to various medical
          conditions. Medical physicists work closely with healthcare professionals to ensure the safe and effective use
          of radiation-based technologies, such as X-rays, CT scans, MRI, nuclear medicine, and radiation therapy.
        </p>
      </div>

      <hr className="my-8" />

      <h3
        className="mb-12 mt-2 text-2xl font-semibold tracking-tight dark:text-white lg:leading-snug">
        Why pursue a Master's degree in Medical Physics?
      </h3>

      <div className="mx-auto mt-14 mb-14 dark:prose-invert">
        <p className="my-4">
          A Master’s degree in Medical Physics is typically required to become a certified medical physicist. It
          provides comprehensive training in the field, equipping students with the necessary knowledge and skills to
          work in healthcare institutions, research facilities, or industry. The degree program focuses on theoretical
          coursework, practical training, and research projects, enabling students to specialize in areas like radiation
          therapy, imaging, or nuclear medicine. </p>
      </div>

      <hr className="my-8" />

      <h3
        className="mb-12 mt-2 text-2xl font-semibold tracking-tight dark:text-white lg:leading-snug">
        What are the prerequisites for a Master's in Medical Physics?
      </h3>

      <div className="mx-auto mt-14 mb-14 dark:prose-invert">
        <p className="my-4">
          Prerequisites may vary depending on the specific university and program, but generally, a Bachelor’s degree in
          physics, engineering, or a related field is required. Some programs may also have specific coursework
          prerequisites in mathematics, physics, biology, and chemistry. Additionally, programs often require applicants
          to have a strong academic background, letters of recommendation, and satisfactory scores on standardized tests
          like the GRE (Graduate Record Examination). </p>
      </div>

      <hr className="my-8" />

      <h3
        className="mb-12 mt-2 text-2xl font-semibold tracking-tight dark:text-white lg:leading-snug">
        What topics are covered in a Master's program in Medical Physics?
      </h3>

      <div className="mx-auto mt-14 mb-14 dark:prose-invert">
        <p className="my-4">
          A Master’s program in Medical Physics covers a wide range of topics, including radiation physics, radiation
          biology, radiological imaging, radiation therapy techniques, radiation safety, dosimetry, medical imaging
          modalities, treatment planning, and quality assurance in medical physics. Students may also have the
          opportunity to specialize in areas such as radiation oncology, diagnostic imaging, or nuclear medicine,
          depending on the program and their interests. </p>
      </div>

      <hr className="my-8" />

      <h3
        className="mb-12 mt-2 text-2xl font-semibold tracking-tight dark:text-white lg:leading-snug">
        Are there clinical or hands-on training components in the program?
      </h3>

      <div className="mx-auto mt-14 mb-14 dark:prose-invert">
        <p className="my-4">
          Yes, many Master’s programs in Medical Physics include clinical or hands-on training components. These can
          take the form of practical laboratory work, internships, or clinical rotations in healthcare institutions.
          These experiences allow students to apply their theoretical knowledge in real-world medical settings, gain
          practical skills, and work alongside experienced medical physicists and healthcare professionals. </p>
      </div>

      <hr className="my-8" />

      <h3
        className="mb-12 mt-2 text-2xl font-semibold tracking-tight dark:text-white lg:leading-snug">
        What career opportunities are available after completing a Master's in Medical Physics?
      </h3>

      <div className="mx-auto mt-14 mb-14 dark:prose-invert">
        <p className="my-4">
          A Master’s degree in Medical Physics opens up various career opportunities. Graduates can work in hospitals,
          cancer centers, research institutions, regulatory agencies, or industry. They may find roles as clinical
          medical physicists, radiation safety officers, radiation therapy physicists, imaging specialists,
          dosimetrists, or research scientists. Some individuals also choose to pursue further education or
          specialization by pursuing a Ph.D. in Medical Physics or a related field.
        </p>
      </div>

    </Container>
  );
}
