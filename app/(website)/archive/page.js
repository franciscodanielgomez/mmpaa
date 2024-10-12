import { Suspense } from "react";
import Container from "@/components/container";
import Archive from "./archive";
import Loading from "@/components/loading";

export const dynamic = "force-dynamic";

export const runtime = "edge";

export default async function ArchivePage({ searchParams }) {
  return (
    <>
      <Container className="relative">
        <h1
          className="text-brand-primary mb-12 mt-2 text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
          Announcements
        </h1>
        <h3
          className="mb-12 mt-2 text-2xl font-semibold tracking-tight dark:text-white lg:leading-snug">
          Events and News
        </h3>


        <div className="mx-auto mt-14 mb-4  dark:prose-invert">
          <p>
            Mainly, our events are based on webinars, where graduates and students from the MMP program get to
            communicate together, share their experiences and skills. In the near future, our aim is to have global
            events where we can meet in person with as many students and graduates as possible. Additionally, we are
            excited to announce that our second webinar is being set up, and a newsletter is coming soon, containing
            interviews with our graduates and articles about new developments in the world of medical physics.
          </p>
        </div>


        <Suspense
          key={searchParams.page || "1"}
          fallback={<Loading />}>
          <Archive searchParams={searchParams} />
        </Suspense>
      </Container>
    </>
  );
}

// export const revalidate = 60;
