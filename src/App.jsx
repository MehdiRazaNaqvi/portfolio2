// import { Bar } from "react-chartjs-2";
// import Chart from 'chart.js/auto';
import Home from "./pics/home.svg"
import Skill from "./pics/skills.svg"
import Person from "./pics/person.svg"
import Chat from "./pics/chat.svg"
import Project from "./pics/projects.svg"
import Contact from "./pics/contact.svg"

import Message from "./pics/message.svg"


import Mypic from "./pics/pic.jpg"

import { useNavigate } from "react-router-dom"

import "./app.css"


const App = () => {

  const navigate = useNavigate();

  return (

    // <div className="main_div">



    //   <Bar
    //     className="actual_bar"
    //     data={{
    //       labels: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    //       datasets: [{
    //         label: "# of votes", data: [3, 7, 6, 3], backgroundColor: ["orange" , "yellow" , "pink" , "green"], barPercentage: 0.5,
    //         barThickness: 40,
    //       }]
    //     }}



    //     height='50vh'
    //     width='50vw'
    //     options={{ maintainAspectRatio: false , plugins:{legend: {labels: {font : 200}}}}}

    //   >

    //   </Bar>



    // </div>






    <div className="base" >



      <div className="navbar" >

        <img href="#home" className="nav_img" src={Home} />
        <img href='#about' className="nav_img" src={Person} />
        <img href="#skills" className="nav_img" src={Skill} />
        <img href="#projects" className="nav_img" src={Project} />
        <img href="#message_me" className="nav_img" src={Chat} />



      </div>






      <div className="page" id="home">

        <span className="span" >

          {/* <span className="span1" > Hello I am </span> */}
          <span className="span2"> <h3>Syed Mehdi Raza Naqvi</h3> </span>
          <span className="span3"> MERN stack developer </span>


          <span className="span5">
            <a rel="noopener" target="_blank" href=""> <img className="social_img" src="https://img.icons8.com/ios/50/000000/whatsapp--v1.png" /></a>
            <a rel="noopener" target="_blank" href=""> <img className="social_img" src="https://img.icons8.com/ios/50/000000/facebook-new.png" /></a>
            <a rel="noopener" target="_blank" href=""> <img className="social_img" src="https://img.icons8.com/ios/50/000000/github--v1.png" /></a>
            <a rel="noopener" target="_blank" href=""> <img className="social_img" src="https://img.icons8.com/ios/50/000000/gmail--v1.png" /></a>
            <a rel="noopener" target="_blank" href="https://www.linkedin.com/in/syed-mehdi-3355601b1/"> <img className="social_img" src="https://img.icons8.com/ios/50/000000/linkedin-circled--v1.png" />  </a>
          </span>



          <span className="span4">

            <button className="btn btn-outline-light">Download CV</button>
            <button className="btn btn-light">Lets Talk</button>

          </span>

     

        </span>
      </div>




      <div className="page2" id="about">

        <div className="heading" > <p>Get to know</p> <p>About me</p>  </div>

        <span className="partial" >
          <div className="pic"> <img src={Mypic} className="self_img" /> </div>
          <div className="text"> <p>I am a full stack developer.I utilize the MERN stack to deliver fast and scalable apps,I am currently seeking a full time role, whilst freelancing.</p> </div>
        </span>

      </div>




      <div className="page2" id="skills">

        <div className="heading" > <p>Skills</p>  </div>

        <span className="partial" >
          <div className="pic"> <div className="cardu" ></div> </div>
          <div className="text"> <div className="cardu" ></div> </div>
        </span>

      </div>




      <div className="page2" id="projects">

        <div className="heading" > <p>Some of my practice</p> <p>Projects</p>  </div>

        <span className="grid" >

          <div className="card bg-light text-dark">
            <img referrerPolicy="no-referrer" class="card-img" src="https://lh3.googleusercontent.com/m9FdxtY7T-sylHGgoCgJ7Ivdy5jbN0ici9WmwibvOl6uWgvK8D0rHNodyXgM7yoTTTTmR2eClGel47B8fhdby1G1CbZvHnm7GEu72CPDFYXa2WV4JhEdeBZk1SMmPd6o_RAAGjIFbtFlyN3CSfZahZmiA2PLy9dC_8Fa6OWmsd9Z9OWgXLgUJ-rcyuP6Sk1cmgFIacHa3F6jj2k_ItKt2dlZ7hLNvsFpOZpeHbWIJ1Mc6T1QltVh36xQkr2hQjOZoagwOMMnTj3CRG82ClGlXdX3fAgxSYjqRjWZYeQ13bFe4mOYkkbGlWCHX6N7vWBam4lTRFehgf7Ei59rLnB8WQpnonDgZmJ_ET6xhNXsAQrTOr1iOuyKSM_8xKXcUHZVZStIF95T2_6QcssP7r0dDqS2GUkx_PHNs3C_4yfg36OHx-2n1iLCxaqZ4qjGpPFDVVWY_Hgs6WInZRAfmw996mWjey1EV_TLLqkYVhlzZ1yVeYyVpsx8adRWSQW9huDPM7RhawsJUKYdiR351bXolxNbeimKU2kNI53-5peeLAXwqVSqiHuIPeVEt5g2SrE2T64ouLknQLhnBe016eoX8ebEPahC76EDPO6CwXg3xP5UJy6w4rjPei7y0XiKQjcIarS7VR9ZW48m9Ilbq7CcN1nud-kXLsthKexDnxovATQCVCg-bF3Llmn-si19F36ZJerjY-t8CbxqETZktVI53f0CX9wf0P_63N4jrdi7BlMMolSCY3uil79DIVfx=w1366-h657-no?authuser=0" alt="Card image" />
            <div class="card-img-overlay">
              <h5 class="card-title">Chat App</h5>
              <p class="card-text">dwdwf</p>
            </div>
          </div>



          <div className="card bg-light text-dark">
            <img referrerPolicy="no-referrer" class="card-img" src="https://lh3.googleusercontent.com/k-fKWcVb5KZkg2PbiXcgI99ZdK42Q4LNodyx358BtV9W41L9u_RGQdwcGR8jgGq7c_nmXxrrzJwAUSkBMR7M7XzDK4paFffeGaEXI-ojMKODxZ8U3BYt6krtH2nudAghGKziN_lEBWT-8_J9wEUVRNIfLGaLBZYVq1pgi46JV5IUVVCI0hByMx4DVDcFnMIFKfHJVDbIDLADPonPxLVlXQMWo-GahmPqCuNwyusvM6wO1QXoChDIgVKWZlGiZnueWUvHH59pYfBOL8SujXNrSMkRVFWYtvkmUM0q_tEKGxZf9bk0mfDYO8Su2aK3MQvnDWaJgrawIXqtx1oV8rsQVi7w-1dC_7vcs-ekPcmqKPQMJrpqsE64e3lO-lhu7PXKDvW-zVY8lb2D7vKtgPCasJvQHSAsoqB7555g8h193DQ1bL7NLnqVfENWf-vQ9ILh4KhK4yOJfVkFlBqD1OCMq1ptfuYRH9Gme8djrdL_S-7blW3SvPGaDbTVR8xXejSHrtDz8Z885fiUasHsagRtZM1afy2McgUSw24B2fD4jcOTdgj9-ByhUQ2AaQO39oQLeWASfxxOAceSZYUBklz1O3ZRXV0ZHfwUptlFgtzxhWDBxmMO5MZvT_nFynU9koilZ7PdoIc4fQ9-sx-hYWYKXBBPTvErbhWAP_XEV0FVs6sqe_5G4-T2JQfMLvDtqMdEf-GBOjLRZTkR6o4MxbFBYQ8YB8pttjy-z4Q-zkBPW4sr0g3PkgyJx99E5qIj=w525-h250-no?authuser=0" alt="Card image" />
            <div class="card-img-overlay">
              <h5 class="card-title">Crypto Webapp</h5>
              <p class="card-text">dwdwf</p>
            </div>
          </div>



          <div className="card bg-light text-dark">
            <img referrerPolicy="no-referrer" class="card-img" src="https://lh3.googleusercontent.com/8qWDFkzQS3Y2YI54cLV_6kQ2K5cG6zaTrGBLLZAC_U_h-INGx1H2ZsV0R_YaEqPa1GVMuHcpOXUGBjiiH2rMIpN8H24olVY7OQMPLeQcjdK_Bgf8EfVwO5pYq4E2J7nh2Z6_9ric9vz9P8HqOnXuMO5mTumsTG1eXLFpZI40J6iXWBBxCQvbOMVoGjVNeBE8mhrcSzOPXLFixL58J7779Z1-HQ1PpSK5zXA5w1QYhrRtvPt38NXDGzaU8ARbd_YsAY8RRVnZKdN_BhgtKMsdDnhzyMNUSNc1FjeIKSpGvBumvrb-xAfRaZUleQDJd9az09U3KLxpr2ne3B-B1vkPenjmwTLakokLH_ylv_6tgXWKNCdSoP2QaQYMpD10MgWqaz3rLxuu7imfbhXEDFQYrlS8tUg_ksUQd8Nn0qY0HvXlzC_ziuecZEzVO1IgeEbN7c_YWe--plhvLyWhW0ai5q-XgjCcaAdToJFxQtcqMAZbBaMlFGECi9tKN4NhtTyeFBwcVFs2il7JTaV3OWbpeFK0w1_VnThdQstskXLavZu-m99uTFlbVhwgHouSUhCxyc4azuagDKYQe5zBPfexF4z4rr9usxLk2OheNyMSvi6-ivrgquziqCrM3Bk6cScWERAZGTpRZn_0ESCi_TdIZ5HpLCXbpmKyWfLTQV2HBV5eI_p0csR8dALhWNP7d2iCocGyEdoGmwzdNs8rwDnXqH9JcL3tzGj-O3Gd9EOeAqCnnqlOcygqH-8YfDzZ=w1366-h654-no?authuser=0" alt="Card image" />
            <div className="card-img-overlay">
              <h5 className="card-title">Covid Trracker App</h5>
              <p className="card-text">An app that provides realtime statistics regarding covid 19 </p>
            </div>
          </div>





          <div className="card bg-light text-dark">
            <img referrerPolicy="no-referrer" class="card-img" src="https://lh3.googleusercontent.com/k-fKWcVb5KZkg2PbiXcgI99ZdK42Q4LNodyx358BtV9W41L9u_RGQdwcGR8jgGq7c_nmXxrrzJwAUSkBMR7M7XzDK4paFffeGaEXI-ojMKODxZ8U3BYt6krtH2nudAghGKziN_lEBWT-8_J9wEUVRNIfLGaLBZYVq1pgi46JV5IUVVCI0hByMx4DVDcFnMIFKfHJVDbIDLADPonPxLVlXQMWo-GahmPqCuNwyusvM6wO1QXoChDIgVKWZlGiZnueWUvHH59pYfBOL8SujXNrSMkRVFWYtvkmUM0q_tEKGxZf9bk0mfDYO8Su2aK3MQvnDWaJgrawIXqtx1oV8rsQVi7w-1dC_7vcs-ekPcmqKPQMJrpqsE64e3lO-lhu7PXKDvW-zVY8lb2D7vKtgPCasJvQHSAsoqB7555g8h193DQ1bL7NLnqVfENWf-vQ9ILh4KhK4yOJfVkFlBqD1OCMq1ptfuYRH9Gme8djrdL_S-7blW3SvPGaDbTVR8xXejSHrtDz8Z885fiUasHsagRtZM1afy2McgUSw24B2fD4jcOTdgj9-ByhUQ2AaQO39oQLeWASfxxOAceSZYUBklz1O3ZRXV0ZHfwUptlFgtzxhWDBxmMO5MZvT_nFynU9koilZ7PdoIc4fQ9-sx-hYWYKXBBPTvErbhWAP_XEV0FVs6sqe_5G4-T2JQfMLvDtqMdEf-GBOjLRZTkR6o4MxbFBYQ8YB8pttjy-z4Q-zkBPW4sr0g3PkgyJx99E5qIj=w525-h250-no?authuser=0" alt="Card image" />
            <div class="card-img-overlay">
              <h5 class="card-title">Crypto Webapp</h5>
              <p class="card-text">dwdwf</p>
            </div>
          </div>



          <div className="card bg-light text-dark">
            <img referrerPolicy="no-referrer" class="card-img" src="https://lh3.googleusercontent.com/k-fKWcVb5KZkg2PbiXcgI99ZdK42Q4LNodyx358BtV9W41L9u_RGQdwcGR8jgGq7c_nmXxrrzJwAUSkBMR7M7XzDK4paFffeGaEXI-ojMKODxZ8U3BYt6krtH2nudAghGKziN_lEBWT-8_J9wEUVRNIfLGaLBZYVq1pgi46JV5IUVVCI0hByMx4DVDcFnMIFKfHJVDbIDLADPonPxLVlXQMWo-GahmPqCuNwyusvM6wO1QXoChDIgVKWZlGiZnueWUvHH59pYfBOL8SujXNrSMkRVFWYtvkmUM0q_tEKGxZf9bk0mfDYO8Su2aK3MQvnDWaJgrawIXqtx1oV8rsQVi7w-1dC_7vcs-ekPcmqKPQMJrpqsE64e3lO-lhu7PXKDvW-zVY8lb2D7vKtgPCasJvQHSAsoqB7555g8h193DQ1bL7NLnqVfENWf-vQ9ILh4KhK4yOJfVkFlBqD1OCMq1ptfuYRH9Gme8djrdL_S-7blW3SvPGaDbTVR8xXejSHrtDz8Z885fiUasHsagRtZM1afy2McgUSw24B2fD4jcOTdgj9-ByhUQ2AaQO39oQLeWASfxxOAceSZYUBklz1O3ZRXV0ZHfwUptlFgtzxhWDBxmMO5MZvT_nFynU9koilZ7PdoIc4fQ9-sx-hYWYKXBBPTvErbhWAP_XEV0FVs6sqe_5G4-T2JQfMLvDtqMdEf-GBOjLRZTkR6o4MxbFBYQ8YB8pttjy-z4Q-zkBPW4sr0g3PkgyJx99E5qIj=w525-h250-no?authuser=0" alt="Card image" />
            <div class="card-img-overlay">
              <h5 class="card-title">Crypto Webapp</h5>
              <p class="card-text">dwdwf</p>
            </div>
          </div>



          <div className="card bg-light text-dark">
            <img referrerPolicy="no-referrer" class="card-img" src="https://lh3.googleusercontent.com/k-fKWcVb5KZkg2PbiXcgI99ZdK42Q4LNodyx358BtV9W41L9u_RGQdwcGR8jgGq7c_nmXxrrzJwAUSkBMR7M7XzDK4paFffeGaEXI-ojMKODxZ8U3BYt6krtH2nudAghGKziN_lEBWT-8_J9wEUVRNIfLGaLBZYVq1pgi46JV5IUVVCI0hByMx4DVDcFnMIFKfHJVDbIDLADPonPxLVlXQMWo-GahmPqCuNwyusvM6wO1QXoChDIgVKWZlGiZnueWUvHH59pYfBOL8SujXNrSMkRVFWYtvkmUM0q_tEKGxZf9bk0mfDYO8Su2aK3MQvnDWaJgrawIXqtx1oV8rsQVi7w-1dC_7vcs-ekPcmqKPQMJrpqsE64e3lO-lhu7PXKDvW-zVY8lb2D7vKtgPCasJvQHSAsoqB7555g8h193DQ1bL7NLnqVfENWf-vQ9ILh4KhK4yOJfVkFlBqD1OCMq1ptfuYRH9Gme8djrdL_S-7blW3SvPGaDbTVR8xXejSHrtDz8Z885fiUasHsagRtZM1afy2McgUSw24B2fD4jcOTdgj9-ByhUQ2AaQO39oQLeWASfxxOAceSZYUBklz1O3ZRXV0ZHfwUptlFgtzxhWDBxmMO5MZvT_nFynU9koilZ7PdoIc4fQ9-sx-hYWYKXBBPTvErbhWAP_XEV0FVs6sqe_5G4-T2JQfMLvDtqMdEf-GBOjLRZTkR6o4MxbFBYQ8YB8pttjy-z4Q-zkBPW4sr0g3PkgyJx99E5qIj=w525-h250-no?authuser=0" alt="Card image" />
            <div class="card-img-overlay">
              <h5 class="card-title">Crypto Webapp</h5>
              <p class="card-text">dwdwf</p>
            </div>
          </div>



          <div className="card bg-light text-dark">
            <img referrerPolicy="no-referrer" class="card-img" src="https://lh3.googleusercontent.com/k-fKWcVb5KZkg2PbiXcgI99ZdK42Q4LNodyx358BtV9W41L9u_RGQdwcGR8jgGq7c_nmXxrrzJwAUSkBMR7M7XzDK4paFffeGaEXI-ojMKODxZ8U3BYt6krtH2nudAghGKziN_lEBWT-8_J9wEUVRNIfLGaLBZYVq1pgi46JV5IUVVCI0hByMx4DVDcFnMIFKfHJVDbIDLADPonPxLVlXQMWo-GahmPqCuNwyusvM6wO1QXoChDIgVKWZlGiZnueWUvHH59pYfBOL8SujXNrSMkRVFWYtvkmUM0q_tEKGxZf9bk0mfDYO8Su2aK3MQvnDWaJgrawIXqtx1oV8rsQVi7w-1dC_7vcs-ekPcmqKPQMJrpqsE64e3lO-lhu7PXKDvW-zVY8lb2D7vKtgPCasJvQHSAsoqB7555g8h193DQ1bL7NLnqVfENWf-vQ9ILh4KhK4yOJfVkFlBqD1OCMq1ptfuYRH9Gme8djrdL_S-7blW3SvPGaDbTVR8xXejSHrtDz8Z885fiUasHsagRtZM1afy2McgUSw24B2fD4jcOTdgj9-ByhUQ2AaQO39oQLeWASfxxOAceSZYUBklz1O3ZRXV0ZHfwUptlFgtzxhWDBxmMO5MZvT_nFynU9koilZ7PdoIc4fQ9-sx-hYWYKXBBPTvErbhWAP_XEV0FVs6sqe_5G4-T2JQfMLvDtqMdEf-GBOjLRZTkR6o4MxbFBYQ8YB8pttjy-z4Q-zkBPW4sr0g3PkgyJx99E5qIj=w525-h250-no?authuser=0" alt="Card image" />
            <div class="card-img-overlay">
              <h5 class="card-title">Crypto Webapp</h5>
              <p class="card-text">dwdwf</p>
            </div>
          </div>



          <div className="card bg-light text-dark">
            <img referrerPolicy="no-referrer" class="card-img" src="https://lh3.googleusercontent.com/k-fKWcVb5KZkg2PbiXcgI99ZdK42Q4LNodyx358BtV9W41L9u_RGQdwcGR8jgGq7c_nmXxrrzJwAUSkBMR7M7XzDK4paFffeGaEXI-ojMKODxZ8U3BYt6krtH2nudAghGKziN_lEBWT-8_J9wEUVRNIfLGaLBZYVq1pgi46JV5IUVVCI0hByMx4DVDcFnMIFKfHJVDbIDLADPonPxLVlXQMWo-GahmPqCuNwyusvM6wO1QXoChDIgVKWZlGiZnueWUvHH59pYfBOL8SujXNrSMkRVFWYtvkmUM0q_tEKGxZf9bk0mfDYO8Su2aK3MQvnDWaJgrawIXqtx1oV8rsQVi7w-1dC_7vcs-ekPcmqKPQMJrpqsE64e3lO-lhu7PXKDvW-zVY8lb2D7vKtgPCasJvQHSAsoqB7555g8h193DQ1bL7NLnqVfENWf-vQ9ILh4KhK4yOJfVkFlBqD1OCMq1ptfuYRH9Gme8djrdL_S-7blW3SvPGaDbTVR8xXejSHrtDz8Z885fiUasHsagRtZM1afy2McgUSw24B2fD4jcOTdgj9-ByhUQ2AaQO39oQLeWASfxxOAceSZYUBklz1O3ZRXV0ZHfwUptlFgtzxhWDBxmMO5MZvT_nFynU9koilZ7PdoIc4fQ9-sx-hYWYKXBBPTvErbhWAP_XEV0FVs6sqe_5G4-T2JQfMLvDtqMdEf-GBOjLRZTkR6o4MxbFBYQ8YB8pttjy-z4Q-zkBPW4sr0g3PkgyJx99E5qIj=w525-h250-no?authuser=0" alt="Card image" />
            <div class="card-img-overlay">
              <h5 class="card-title">Crypto Webapp</h5>
              <p class="card-text">dwdwf</p>
            </div>
          </div>




          <div className="card bg-light text-dark">
            <img referrerPolicy="no-referrer" class="card-img" src="https://lh3.googleusercontent.com/k-fKWcVb5KZkg2PbiXcgI99ZdK42Q4LNodyx358BtV9W41L9u_RGQdwcGR8jgGq7c_nmXxrrzJwAUSkBMR7M7XzDK4paFffeGaEXI-ojMKODxZ8U3BYt6krtH2nudAghGKziN_lEBWT-8_J9wEUVRNIfLGaLBZYVq1pgi46JV5IUVVCI0hByMx4DVDcFnMIFKfHJVDbIDLADPonPxLVlXQMWo-GahmPqCuNwyusvM6wO1QXoChDIgVKWZlGiZnueWUvHH59pYfBOL8SujXNrSMkRVFWYtvkmUM0q_tEKGxZf9bk0mfDYO8Su2aK3MQvnDWaJgrawIXqtx1oV8rsQVi7w-1dC_7vcs-ekPcmqKPQMJrpqsE64e3lO-lhu7PXKDvW-zVY8lb2D7vKtgPCasJvQHSAsoqB7555g8h193DQ1bL7NLnqVfENWf-vQ9ILh4KhK4yOJfVkFlBqD1OCMq1ptfuYRH9Gme8djrdL_S-7blW3SvPGaDbTVR8xXejSHrtDz8Z885fiUasHsagRtZM1afy2McgUSw24B2fD4jcOTdgj9-ByhUQ2AaQO39oQLeWASfxxOAceSZYUBklz1O3ZRXV0ZHfwUptlFgtzxhWDBxmMO5MZvT_nFynU9koilZ7PdoIc4fQ9-sx-hYWYKXBBPTvErbhWAP_XEV0FVs6sqe_5G4-T2JQfMLvDtqMdEf-GBOjLRZTkR6o4MxbFBYQ8YB8pttjy-z4Q-zkBPW4sr0g3PkgyJx99E5qIj=w525-h250-no?authuser=0" alt="Card image" />
            <div class="card-img-overlay">
              <h5 class="card-title">Crypto Webapp</h5>
              <p class="card-text">dwdwf</p>
            </div>
          </div>

        </span>

      </div>







      <div className="page2" id="message_me">

        <div className="heading" > <p>Message Me</p> </div>

        <span className="partial" >

          <div className="text message"> <input type="text" placeholder="Enter your Name" className="form-control" /><input placeholder="Enter Message" type="text" className="form-control" /> <button className="btn btn-outline-light">Send</button> </div>
          <div className="pic last_pic"> <img src={Message} className="full_img" /> </div>
        </span>

      </div>











    </div>










  )

}


export default App