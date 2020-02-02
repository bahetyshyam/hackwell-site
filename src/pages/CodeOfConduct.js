import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';

const CodeOfConduct = () => {
  return (
    <>
      <Header />
      <main className='mt-6'>
        <section className='px-4 py-32'>
          <div className='mx-auto md:max-w-xl lg:max-w-2xl xl:max-w-4xl'>
            <h2 className='text-center text-4xl md:text-5xl leading-tight font-medium text-gray-900'>
              Code of Conduct
            </h2>
            <ul className='list-disc list-inside text-xl text-gray-800 mt-6'>
              <li className='mb-3'>
                Harassment includes offensive verbal comments related to gender,
                gender identity and expression, age, sexual orientation,
                disability, physical appearance, body size, race, ethnicity,
                nationality, religion or political views, sexual images in
                public spaces, deliberate intimidation, stalking, following,
                photography or audio/video recording against reasonable consent,
                sustained disruption of talks or other events, inappropriate
                physical contact, and unwelcome sexual attention.
              </li>
              <li className='mb-3'>
                Photography is encouraged, but other participants must be given
                a reasonable chance to opt out from being photographed. If they
                object to the taking of their photograph, comply with their
                request. It is inappropriate to take photographs in contexts
                where people have a reasonable expectation of privacy (in
                bathrooms or where participants are sleeping).
              </li>
              <li className='mb-3'>
                Participants asked to stop any harassing behavior are expected
                to comply immediately.
              </li>
              <li className='mb-3'>
                As this is a hackathon, we like to explicitly note that the
                hacks created at our hackathon are equally subject to the
                anti-harassment policy.
              </li>
              <li className='mb-3'>
                Sponsors and partners are also subject to the anti-harassment
                policy. In particular, sponsors should not use sexualised
                images, activities, or other material. Sponsor representatives
                (including volunteers) should not use sexualised
                clothing/uniforms/costumes, or otherwise create a sexualised
                environment.
              </li>
              <li className='mb-3'>
                If you are being harassed, notice that someone else is being
                harassed, or have any other concerns, please contact a member of
                hackathon staff immediately.
              </li>
              <li className='mb-3'>
                Hackathon staff will be happy to help participants contact any
                local security or local law enforcement, provide escorts, or
                otherwise assist those experiencing harassment to feel safe for
                the duration of the hackathon. We value your attendance.
              </li>
              <li className='mb-3'>
                If a participant engages in harassing behavior, the hackathon
                organisers may take any action they deem appropriate. This
                includes warning the offender, expulsion from the hackathon with
                no refund (if applicable), or reporting their behaviour to local
                law enforcement.
              </li>
              <li>
                We expect participants to follow these rules at hackathon and
                workshop venues and hackathon-related social events.
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CodeOfConduct;
