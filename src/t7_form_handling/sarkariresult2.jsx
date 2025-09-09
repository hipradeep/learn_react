import React from 'react';
//import './style.css'; // Assuming you'll convert the CSS as well

const SarkariResult = () => {
  return (
    <div className="sarkari-result-container">
      <center>
        <div id="header1">
          <div id="headerimg">
            <img src="logo-new.png" height="150" width="150" alt="Sarkari Result Logo"/>
          </div>
          <div id="headerS">
            SARKARI RESULT<br />
            <p>WWW.SARKARIRESULT.COM</p>
          </div>
        </div>
        
        <div id="header2"> 
          <div id="header2UL">
            <ul>
              <li><a href="https://www.sarkariresult.com/">Home</a></li>
              <li><a href="https://www.sarkariresult.com/latestjob.php">Latest Jobs</a></li>
              <li><a href="https://www.sarkariresult.com/result.php">Results</a></li>
              <li><a href="https://www.sarkariresult.com/admitcard.php">Admit Card</a></li>
              <li><a href="https://www.sarkariresult.com/answerkey.php">Answer Key</a></li>
              <li><a href="https://www.sarkariresult.com/syllabus.php">Syllabus</a></li>
              <li><a href="https://www.sarkariresult.com/admission.php">Admission</a></li>
              <li><a href="https://www.sarkariresult.com/contactus.php">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </center>
      
      <br />
      
      <div align="center">
        <div id="marquee0">
          <a href="https://play.google.com/store/apps/details?id=com.app.app14f269771c01" target="_blank" rel="noopener noreferrer">
            <b>Sarkari Result Android Apps</b>
          </a> 
          <b>||</b> 
          <a href="https://www.microsoft.com/en-us/store/apps/sarkari-result/9nblggh6cm69" target="_blank" rel="noopener noreferrer">
            <b>Sarkari Result Window Apps</b>
          </a> 
          <b>||</b> 
          <a href="https://itunes.apple.com/us/app/sarkari-result/id1051363935?ls=1&amp;mt=8" target="_blank" rel="noopener noreferrer">
            <b>Sarkari Result Apple / IOS Apps</b>
          </a> 
          <b>||</b>  
          <a href="https://www.instagram.com/sarkariresult.comofficial/" target="_blank" rel="noopener noreferrer">
            <b>Follow Instagram</b>
          </a>
        </div>
        
        <MarqueeSection />
      </div>

      <center>
        <div id="header3">
          <div id="header3_1">
            <img src="" height="90" width="728" alt="Advertisement"/>
          </div>
          <div id="header3A">
            <a href="https://twitter.com/sarkari_result?ref_src=twsrc%5Etfw" target="_blank" rel="noopener noreferrer">Follow @sarkari_result</a>
          </div>
          <div id="header3B">
            <a href="https://www.facebook.com/SarkariResult.ComOfficial/" target="_blank" rel="noopener noreferrer">Join us on Facebook</a>
          </div>
        </div>
      </center>

      <QuickLinksSection />

      <center>
        <div id="header5">
          <img src="" height="90" width="728" alt="Advertisement"/>
        </div>
      </center>

      <ContentSections />

      <FooterSection />
    </div>
  );
};

// Marquee component
const MarqueeSection = () => {
  return (
    <>
      <div id="marquee1" align="center">
        <marquee behavior="alternate">
          <a href="https://www.sarkariresult.com/bank/bnp-various-post-may21.php" target="_blank" rel="noopener noreferrer">
            <b>BNP Various Post Online Form 2021</b>
          </a> 
          <b>| |</b>
          <a href="https://www.sarkariresult.com/delhi/delhi-dsssb-02-2021.php" target="_blank" rel="noopener noreferrer">
            <b>DSSSB TGT Online Form 2021</b>
          </a> 
          <b>| |</b>
          <a href="https://www.sarkariresult.com/2021/up-police-si-2021.php" target="_blank" rel="noopener noreferrer">
            <b>UP Police SI Online Form 2021</b>
          </a>
        </marquee>
      </div>
      <div id="marquee1" align="center">
        <marquee behavior="alternate">
          <a href="https://www.sarkariresult.com/2021/kvs-class-1-admission.php" target="_blank" rel="noopener noreferrer">
            <b>KVS Class 1 Admission Online Form 2021</b>
          </a> 
          <b>||</b>
          <a href="https://www.sarkariresult.com/force/navy-ssr-aa-aug21.php" target="_blank" rel="noopener noreferrer">
            <b>Indian Navy SSR/AAU Online Form 2021</b>
          </a> 
          <b>||</b> 
          <a href="https://www.sarkariresult.com/2021/uptet-2021.php" target="_blank" rel="noopener noreferrer">
            <b>UPTET 2021 Syllabus</b>
          </a>
        </marquee>
      </div>
      <div id="marquee2" align="center">
        <marquee behavior="alternate">
          <a href="https://www.sarkariresult.com/2021/co-win-registration.php" target="_blank" rel="noopener noreferrer">
            <b>Corona Vaccine Online Registration 2021</b>
          </a> 
          <b>||</b> 
          <a href="https://www.sarkariresult.com/2021/firozabad-aganwadi-bharti.php" target="_blank" rel="noopener noreferrer">
            <b>Firozabad Aganwadi Bharti Online Form 2021</b>
          </a> 
          <b>||</b> 
          <a href="https://www.sarkariresult.com/2021/india-post-gds-bihar-mahrashtra.php" target="_blank" rel="noopener noreferrer">
            <b>GDS Bihar / Maharashtra Online Form 2021</b>
          </a>
        </marquee>
      </div>
    </>
  );
};

// Quick Links component
const QuickLinksSection = () => {
  return (
    <center>
      <div id="header4">
        <div id="header4LI">
          <ul>
            <li>
              <a href="https://www.sarkariresult.com/force/navy-ssr-aa-aug21.php" id="dili" style={{backgroundColor: '#868a08', marginLeft: '0px'}}>
                <p id="dilip">Indian Navy SSR/AA <br /> Apply Online</p>
              </a>
            </li>
            <li>
              <a href="https://www.sarkariresult.com/2021/co-win-registration.php" id="dili" style={{backgroundColor: '#0404b4'}}>
                <p id="dilipp">Corona Vaccine <br /> Online Registration</p>
              </a>
            </li>
            <li>
              <a href="https://www.sarkariresult.com/2021/up-pgt-2021.php" id="dili" style={{backgroundColor: '#fb5e03'}}>
                <p id="dilipp">UP PGT 2021 <br /> Apply Online</p>
              </a>
            </li>
            <li>
              <a href="https://www.sarkariresult.com/upsc/upsc-cpf-2021.php" id="dili" style={{backgroundColor: '#8c0101'}}>
                <p id="dilipp">UPSC CPF AC 2021 <br /> Apply Online</p>
              </a>
            </li>
            <li>
              <a href="https://www.sarkariresult.com/2021/up-tgt-2021.php" id="dili1" style={{backgroundColor: '#fb0303', marginLeft: '0px'}}>
                <p id="dilip">UP TGT 2021 <br /> Apply Online</p>
              </a>
            </li>
            <li>
              <a href="https://www.sarkariresult.com/upsssc/upsssc-otr-registration.php" id="dili1" style={{backgroundColor: '#0b610b'}}>
                <p id="dilip">UPSSSC OTR<br /> Registration 2021</p>
              </a>
            </li>
            <li>
              <a href="https://www.sarkariresult.com/2021/up-police-si-2021.php" id="dili1" style={{backgroundColor: '#ff00bf'}}>
                <p id="dilip">UP Police SI 2021 <br /> Apply Online</p>
              </a>
            </li>
            <li>
              <a href="https://www.sarkariresult.com/bank/sbi-clerk-2021.php" id="dili1" style={{backgroundColor: '#0080ff'}}>
                <p id="dilip">SBI Clerk 2021 <br /> Apply Online</p>
              </a>
            </li>
          </ul>	
        </div>	
      </div>
    </center>
  );
};

// Content Sections component
const ContentSections = () => {
  return (
    <div align="center" id="header6">
      <div id="header6_1">
        <div id="header6A" className="row1">
          <SectionWithLinks 
            title="Results" 
            viewMoreLink="https://www.sarkariresult.com/result.php"
            links={[
              {text: "Coast Guard Navik / Yantrik Result 2021", url: "https://www.sarkariresult.com/force/coast-guard-navik-yantrik-02-2021.php"},
              {text: "RBI Officer Grade B Phase II Result 2021", url: "https://www.sarkariresult.com/bank/rbi-grade-b-jan21.php"},
              {text: "BPSC APO Pre Result 2021", url: "https://www.sarkariresult.com/bihar/bpsc-apo-01-2020.php"},
              // Add more links as needed
            ]}
          />
          
          <SectionWithLinks 
            title="Answer Key" 
            viewMoreLink="https://www.sarkariresult.com/answerkey.php"
            links={[
              {text: "UPRVUNL Various Post Answer Key 2021", url: "https://www.sarkariresult.com/2020/uprvunl-various-march20.php"},
              {text: "SSC JE 2020 Paper I Answer Key", url: "https://www.sarkariresult.com/ssc/ssc-je-2020.php"},
              // Add more links as needed
            ]}
          />
          
          <SectionWithLinks 
            title="Certificate Verification" 
            viewMoreLink="https://www.sarkariresult.com/verification.php"
            links={[
              {text: "NTA UGC NET June 2020 E Certificate", url: "https://www.sarkariresult.com/nta/ugc-net-june-2020.php"},
              {text: "Pan Card Online Form 2020", url: "https://www.sarkariresult.com/page/pancard.php"},
              // Add more links as needed
            ]}
          />
          
          <SectionWithLinks 
            title="Admit Card" 
            viewMoreLink="https://www.sarkariresult.com/admitcard.php"
            links={[
              {text: "SSC CPO SI 2019 Paper II Exam Postponed", url: "https://www.sarkariresult.com/ssc/ssc-cpo-si-2019.php"},
              {text: "NTA UGC NET Exam May 2021 Postponed", url: "https://www.sarkariresult.com/nta/nta-ugc-net-may-2021.php"},
              // Add more links as needed
            ]}
          />
          
          <SectionWithLinks 
            title="Syllabus" 
            viewMoreLink="https://www.sarkariresult.com/syllabus.php"
            links={[
              {text: "SBI Clerk Syllabus 2021", url: "https://www.sarkariresult.com/bank/sbi-clerk-2021.php"},
              {text: "Indian Navy SSR/AA Syllabus 2021", url: "https://www.sarkariresult.com/force/navy-ssr-aa-aug21.php"},
              // Add more links as needed
            ]}
          />
          
          <SectionWithLinks 
            title="Important" 
            viewMoreLink="https://www.sarkariresult.com/important.php"
            links={[
              {text: "UPSSSC OTR Registration 2021", url: "https://www.sarkariresult.com/upsssc/upsssc-otr-registration.php"},
              {text: "Corona Vaccine Online Registration", url: "https://www.sarkariresult.com/2021/co-win-registration.php"},
              // Add more links as needed
            ]}
          />
          
          <SectionWithLinks 
            title="Latest Jobs" 
            viewMoreLink="https://www.sarkariresult.com/latestjob.php"
            links={[
              {text: "Indian Army JAG 27 Online Form 2021", url: "https://www.sarkariresult.com/force/indian-army-jag27.php"},
              {text: "NWDA Various Post Online Form 2021", url: "https://www.sarkariresult.com/2021/nwda-various-post-07-2021.php"},
              // Add more links as needed
            ]}
          />
          
          <SectionWithLinks 
            title="Admission" 
            viewMoreLink="https://sarkariresult.com/admission.php"
            links={[
              {text: "Bihar 2 Year B.Ed Online Form 2021", url: "https://www.sarkariresult.com/2021/bihar-2yr-b.ed.php"},
              {text: "JIPMAT 2021 Online Form", url: "https://www.sarkariresult.com/2021/jipmat-2021.php"},
              // Add more links as needed
            ]}
          />
        </div>
      </div>
    </div>
  );
};

// Reusable section component
const SectionWithLinks = ({ title, viewMoreLink, links }) => {
  return (
    <div className={`section-${title.replace(/\s+/g, '-').toLowerCase()}`}>
      <div className="section-header">
        <a href={viewMoreLink} target="_blank" rel="noopener noreferrer">{title}</a>
      </div>
      <div className="section-links">
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="view-more">
        <a href={viewMoreLink} target="_blank" rel="noopener noreferrer">View More</a>
      </div>
    </div>
  );
};

// Footer component
const FooterSection = () => {
  return (
    <>
      <center>
        <div id="footer1">
          <a href="#" title="DCMA.com Protection Status">
            <img src="DCMA.jpg" height="27" width="135" alt="DCMA Protection"/>
          </a>	
          <br />
          Designed By <a href="https://liveupx.com" title="Professional Custom Software Development Company">
            <img src="https://liveupx.com/wp-content/uploads/2023/10/liveupx185x44.png" height="27" width="135" alt="LiveUPX"/>
          </a>
        </div>
        <div id="footer2">
          <img src="" height="280" width="1200" alt="Footer Banner"/>
        </div>
      </center>
      
      <center>
        <div id="text">
          <div>
            <p> India has witnessed a high demand for Government jobs for many decades. People prefer Government jobs as 
                their career option considering the wide variety of benefits that are associated with these.
                'Sarkari Naukri' is a dream for millions of people across the nation, and only a few are lucky to land 
                up with such jobs. People tend to take pride in having a Sarkari or Government job.
            </p>
            <p> Government jobs hold the kind of authority not found in private jobs. These also offer job security 
                for a lifetime, and hence a lot of youth prefer them. Getting into a Government job requires a person
                to go through multiple levels of tests. These include a written examination, interview and sometimes 
                even physical examination. These are competitive exams, and millions of people appear for these exams 
                to get into a coveted Government job.
            </p>
            <h2 className="heading">Exams for Government Jobs</h2>
            <p>	Sarkari or Government exams are conducted for various positions in the state as well as central 
                Government. There are various groups in <a href="https://www.sarkariresult.com/latestjob.php">
                Government jobs</a> and candidates can apply for either of these groups, depending on their 
                qualifications. Group A mostly comprises of managerial roles and are considered to be the
                highest level of jobs. Group B is for Gazetted officers. To clear the Group B exam, one has to 
                make the UPSC exam. Most seats under Group B are filled via promotions, so only limited seats 
                are left for entrance via exam. Group C and D are for public servants who have non-supervisory roles.
            </p>
            <h2 className="heading">Sarkari Results</h2>
            <p>	All information about <a href="https://www.sarkariresult.com/result.php">Sarkari result</a> 
                and <a href="https://www.rojgarresult.com/">Rojgar results</a> can be found on sarkariresult.com. 
                It is now easy to log into sarkariresult.com and find out everything that you would want to know 
                about most of the Government exams.
            </p>
            <h2 className="heading">State Level Exams</h2>		
            <p>	State Governments conduct various exams, and the Sarkari Result Info for all these exams can be 
                found online. Sarkari Results in Bihar for all government job exams conducted by the state of Bihar.
                Similarly, Sarkari info for the Sarkari Result in Jharkhand can be searched online for all the 
                exams conducted for the state of Jharkhand. UP Sarkari result is one of the most common online 
                searches in India, considering the high demand for Government jobs in the state of U.P.
            </p>
            <h2 className="heading">Get Access to Detailed Information </h2>
            <p>	Sarkariresult.com is a one-stop destination for all queries on Sarkari results. It has a list of 
                all the Government exams, which can be seen as links. If one clicks on these exam names or links,
                the website provides exhaustive information on that specific exam. This includes the timeline when 
                the exam is conducted, <a href="https://www.sarkariresult.com/admitcard.php">admit card</a> 
                information, the number of seats offered, application forms, Sarkari result dates etc. 
            </p>
            <h2 className="heading">Online Application Process</h2>
            <p>	It is now easy to apply for any Government job online. Some of the posts even allow the submission
                of scanned copies of identification documents. The internet has made it very easy to apply for these 
                jobs, which was once considered to be a cumbersome task. Sarkari result 
                <a href="https://www.sarkariresult.com/admission.php">online form</a> can be found on sarkariresult.com.
                After applying for the exam, one has to appear for the exam and wait for the Sarkari exam result. Some 
                of the exams have multiple stages, and hence, one has to be prepared for all the levels. 
            </p>
            <p>	Be it Sarkari result news or Sarkari Naukri result, all of the information is at the fingertips
                for most applicants. It is even possible just to use the smartphone to make an application and
                live the dream of getting into a Government job.
            </p>
          </div>
        </div>
      </center>
      
      <footer>
        <center>
          <div className="container">
            <div className="footer-content-wrapper clearfix">
              <div className="footer-col large-25 small-50 tiny-100 ta-l flt">
                <h3>Quick Links</h3>
                <a href="https://www.sarkariresult.com/contactus.php">Contact Us</a>
                <a href="https://www.sarkariresult.com/boardall.php">All Board Exams</a>
              </div>
              <div className="footer-col large-25 small-50 tiny-100 ta-l flt">
                <h3>Apps</h3>
                <a href="https://play.google.com/store/apps/details?id=com.app.app14f269771c01">Android App</a>
                <a href="https://itunes.apple.com/us/app/sarkari-result/id1051363935?ls=1&amp;mt=8">Apple IOS App</a>
                <a href="https://www.microsoft.com/en-us/store/apps/sarkari-result/9nblggh6cm69">Window App</a>
              </div>
              <div className="footer-col large-50 small-50 tiny-100 ta-l flt">
                <h3>More</h3>
                <div className="col-3-display">
                  <a href="https://www.sarkariresult.com/bpsc.php">BPSC</a>
                  <a href="https://www.sarkariresult.com/upsssc.php">UPSSSC</a>
                  <a href="https://www.sarkariresult.com/ccc-online.php">CCC</a>
                  <a href="https://www.sarkariresult.com/up-scholarship.php">UP-scholorship</a>
                  <a href="https://www.sarkariresult.com/ibpsall.php">IBPS</a>
                  <a href="https://www.sarkariresult.com/sscall.php">SSC</a>
                  <a href="https://www.sarkariresult.com/upscall.php">UPSC</a>
                  <a href="https://www.sarkariresult.com/indian-air-force.php">Air Force</a>
                  <a href="https://www.sarkariresult.com/indian-navy.php">Navy</a>
                  <a href="https://www.sarkariresult.com/rpsc.php">RPSC</a>
                  <a href="https://www.sarkariresult.com/delhi-dsssb.php">Delhi Dssb</a>
                  <a href="https://www.sarkariresult.com/railwayall.php">Railway</a>
                  <a href="https://www.sarkariresult.com/uppscall.php">UPPCS</a>
                  <a href="https://www.sarkariresult.com/haryana-hssc.php">HSSC</a>
                  <a href="https://www.sarkariresult.com/tetall.php">TET</a>
                  <a href="https://www.sarkariresult.com/coast-guard.php">Coast Guard</a>
                  <a href="https://www.sarkariresult.com/policeall.php">Police Vacancy</a>
                </div>
              </div>
            </div>
          </div>
        </center>
      </footer>
    </>
  );
};

export default SarkariResult;