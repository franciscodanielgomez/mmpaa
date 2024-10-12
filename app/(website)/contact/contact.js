"use client";

import Container from "@/components/container";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import Link from "next/link";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
  InstagramIcon
} from "@heroicons/react/24/outline";

export default function Contact({ settings }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting }
  } = useForm({
    mode: "onTouched"
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);
  // Please update the Access Key in the Sanity CMS - Site Congig Page
  const apiKey = settings?.w3ckey || "YOUR_ACCESS_KEY_HERE";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "MMPAA",
      subject: "Master in Medical Physics Alumni Association"
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    }
  });

  return (
    <Container>
      <h1
        className="text-brand-primary mb-12 mt-2 text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        Contact
      </h1>
      <h3
        className="mb-12 mt-2 text-2xl font-semibold tracking-tight dark:text-white lg:leading-snug">
        Anything we can do for you?
      </h3>

      <div className="mx-auto mt-14 mb-4  dark:prose-invert">
        <p>
          We are here to assist you with any inquiries or concerns you may have related to medical physics, the MMPAA,
          or our activities. Whether you are a student, professional, or someone interested in learning more about the
          field, we are committed to providing the support and information you need.
        </p>
      </div>

      <div className="prose dark:prose-invert">
        <div className="flex space-x-4">
          <p className="mb-0">
            <Link href=" ">Instagram</Link>
          </p>
          <p className="mb-0">
            <Link href=" ">Linkedin</Link>
          </p>
          <p className="mb-0">
            <Link href="mailto:contact@mmpaa.org">Email</Link>
          </p>
        </div>
      </div>

  <hr className="my-8" />

  <div className="my-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-4 bg-gray-100 rounded-lg flex flex-col justify-between">
        <div>
          <h3 className="font-bold mb-8">Any question about Medical Physics?<sup>*</sup></h3>
          <p className="text-gray-700 mb-8">
            MMPAA works closely with medical physics professionals to ensure the safe and effective use of various
            medical technologies, including diagnostic imaging equipment, radiation therapy machines, and nuclear
            medicine instruments. In order to contribute to the development, calibration, and quality assurance of
            medical physics to ensure accurate and reliable results in any part of the world, you could do any
                question-related and we will treat to answer.
              </p>
            </div>
            <a
              href="https://forms.gle/2R7EdzB6ieFBFjkT8"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto"
            >
              <button
                type="button"
                className="py-2 px-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 dark:bg-white dark:text-black"
              >
                Ask a Question
              </button>
            </a>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg flex flex-col justify-between">
            <div>
              <h3 className="font-bold mb-8">Any question about the Association?<sup>*</sup></h3>
              <p className="text-gray-700 mb-8">
                If you have any specific questions about membership or related topics, such as the benefits of joining,
                eligibility requirements, or how to get involved, feel free to contact us. We’re here to guide you
                through
                the process and provide the support you need. Whether you’re interested in becoming a volunteer,
                presenting at an upcoming event, or simply sharing your thoughts and ideas, this is your chance to
                engage
                with the community. We value your participation and look forward to hearing from you through this
                platform.
              </p>

            </div>
            <a
              href="https://forms.gle/L3FHaGhjLHfHNX7R6"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto"
            >
              <button
                type="button"
                className="py-2 px-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 dark:bg-white dark:text-black"
              >
                Ask a Question
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 mb-14 dark:prose-invert">
  <span className="text-xs text-gray-500">
    *Disclaimer: This form is available for private, non-commercial use only. Advertising which is incorporated into, placed in association with, or targeted toward the content of this form, without the express approval and knowledge of MMPAA board site developers, is forbidden. You may not edit, modify, or redistribute this form. The developers of MMPAA board site assume no liability for any activities in connection with this form or for use of this form in connection with any other Web site, computer, or playing device.
  </span>
      </div>

    </Container>
  );
}
