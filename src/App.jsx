

import Home from "./pics/home.svg"
import Skill from "./pics/skills.svg"
import Person from "./pics/person.svg"
import Chat from "./pics/chat.svg"
import Project from "./pics/projects.svg"
import Contact from "./pics/contact.svg"

import Message from "./pics/message.svg"




import Mypic from "./pics/pic.jpg"


import emailjs from "emailjs-com"
import "./app.css"


import FileDownload from "js-file-download"

import Axios from "axios"

const App = () => {







  const sendemail = (e) => {
    e.preventDefault()

    emailjs.sendForm("service_kulgzqp", "template_e2uaurm", e.target, "2sQT7v8YEPNxvnA02")
      .then(res => console.log(res))
      .catch(err => console.log(err))

  }





  const generatepdf = (e) => {


    e.preventDefault()





    Axios({
      url: "https://chat-app-ser.herokuapp.com/download",
      method: "GET",
      responseType: "blob"
    })


      .then(res => FileDownload(res.data, "resume.pdf"))
    // .then(res => console.log(res))



  }







  return (



    <div className="base" >






      <div className="navbar" >

        <a className="nav_a" href="#home"> <img className="nav_img" src={Home} /> </a>
        <a className="nav_a" href="#about"> <img className="nav_img" src={Person} /> </a>
        <a className="nav_a" href="#skills">  <img className="nav_img" src={Skill} /> </a>
        <a className="nav_a" href="#projects"> <img className="nav_img" src={Project} /> </a>
        <a className="nav_a" href="#message_me"> <img className="nav_img" src={Chat} /> </a>



      </div>






      <div className="page" id="home">


        <span className="span" >


          {/* <span className="span1" > Hello I am </span> */}
          <span className="span2"> <h3>Syed Mehdi Raza Naqvi</h3> </span>
          <span className="span3"> MERN stack developer </span>




          <span className="span5">
            <a rel="noopener" target="_blank" href="https://wa.me/03378058628"> <img className="social_img" src="https://img.icons8.com/ios/50/000000/whatsapp--v1.png" /></a>
            <a rel="noopener" target="_blank" href="https://www.facebook.com/syedmehdi.razanaqvi.16/"> <img className="social_img" src="https://img.icons8.com/ios/50/000000/facebook-new.png" /></a>
            <a rel="noopener" target="_blank" href="https://github.com/MehdiRazaNaqvi"> <img className="social_img" src="https://img.icons8.com/ios/50/000000/github--v1.png" /></a>
            <a rel="noopener" target="_blank" href="mailto:mehdiraza1232016@gmail.com?subject=Mail from portfolio"> <img className="social_img" src="https://img.icons8.com/ios/50/000000/gmail--v1.png" /></a>
            <a rel="noopener" target="_blank" href="https://www.linkedin.com/in/syed-mehdi-3355601b1/"> <img className="social_img" src="https://img.icons8.com/ios/50/000000/linkedin-circled--v1.png" />  </a>
            <a rel="noopener" target="_blank" href="https://www.fiverr.com/mehdiraza2000?up_rollout=true"> <img className="social_img" src="https://img.icons8.com/ios/50/000000/fiverr.png" />  </a>


          </span>





          <span className="span4">

            <button className="btn btn-outline-light" onClick={(e) => generatepdf(e)} >Download CV</button>
            <button className="btn btn-light" onClick={() => { window.scrollTo(0, document.body.scrollHeight); }} >Lets Talk </button>

          </span>



        </span>

      </div>




      <div className="page2 about_page" id="about">

        <div className="heading" > <p className="white">Get to know</p> <p className="orange">About me</p>  </div>

        <span className="partial" >
          <div className="pic image"> <img src={Mypic} className="self_img" /> </div>
          <div className="text"> <p className="about_text" >I am a full stack developer.I utilize the MERN stack to deliver fast and scalable apps,I am currently seeking a full time role, whilst freelancing.</p> </div>
        </span>

      </div>





      <div className="page3" id="skills">

        <div className="heading" > <p className="orange">Skills</p>  </div>

        <span className="partial" >

          <div className="frontend">
            <div className="skill_list listone">  <p className="skill_name" >Frontend</p> </div>

            <div className="skill_list"> <img src="https://img.icons8.com/windows/32/FFFFFF/html-5.png" className="skill_img" /> <p className="skill_name" >HTML</p> </div>
            <div className="skill_list"> <img src="https://img.icons8.com/ios/50/FFFFFF/css3.png" className="skill_img" /> <p className="skill_name" >CSS</p> </div>
            <div className="skill_list"> <img src="https://img.icons8.com/ios/50/FFFFFF/javascript-logo.png" className="skill_img" /> <p className="skill_name">Javascript</p> </div>
            <div className="skill_list"> <img src="https://img.icons8.com/ios/50/FFFFFF/react-native--v1.png" className="skill_img" /> <p className="skill_name" >React</p> </div>
            <div className="skill_list"> <img src="https://img.icons8.com/ios/50/FFFFFF/redux.png" className="skill_img" /> <p className="skill_name" >Redux</p> </div>

          </div>

          <div className="backend">
            <div className="skill_list listone">  <p className="skill_name" >Backend</p> </div>

            <div className="skill_list"> <img src="https://img.icons8.com/windows/32/FFFFFF/nodejs.png" className="skill_img" /> <p className="skill_name" >Node js</p> </div>
            <div className="skill_list"> <img src="https://img.icons8.com/windows/32/FFFFFF/js-squared.png" className="skill_img" /> <p className="skill_name" >Express js</p> </div>
            <div className="skill_list"> <img src="https://img.icons8.com/ios/50/FFFFFF/database.png" className="skill_img" /> <p className="skill_name">Mongo DB</p> </div>



          </div>
        </span>

      </div>





      <div className="page2" id="projects">

        <div className="heading" > <p className="white">Some of my practice</p> <p className="orange">Projects</p>  </div>



        <span className="grid" >





          <a rel="noopener" target="_blank" href="https://mehdirazanaqvi.github.io/iadproject/" className="card bg-light text-dark">
            <img referrerPolicy="no-referrer" class="card-img" src="https://lh3.googleusercontent.com/k-fKWcVb5KZkg2PbiXcgI99ZdK42Q4LNodyx358BtV9W41L9u_RGQdwcGR8jgGq7c_nmXxrrzJwAUSkBMR7M7XzDK4paFffeGaEXI-ojMKODxZ8U3BYt6krtH2nudAghGKziN_lEBWT-8_J9wEUVRNIfLGaLBZYVq1pgi46JV5IUVVCI0hByMx4DVDcFnMIFKfHJVDbIDLADPonPxLVlXQMWo-GahmPqCuNwyusvM6wO1QXoChDIgVKWZlGiZnueWUvHH59pYfBOL8SujXNrSMkRVFWYtvkmUM0q_tEKGxZf9bk0mfDYO8Su2aK3MQvnDWaJgrawIXqtx1oV8rsQVi7w-1dC_7vcs-ekPcmqKPQMJrpqsE64e3lO-lhu7PXKDvW-zVY8lb2D7vKtgPCasJvQHSAsoqB7555g8h193DQ1bL7NLnqVfENWf-vQ9ILh4KhK4yOJfVkFlBqD1OCMq1ptfuYRH9Gme8djrdL_S-7blW3SvPGaDbTVR8xXejSHrtDz8Z885fiUasHsagRtZM1afy2McgUSw24B2fD4jcOTdgj9-ByhUQ2AaQO39oQLeWASfxxOAceSZYUBklz1O3ZRXV0ZHfwUptlFgtzxhWDBxmMO5MZvT_nFynU9koilZ7PdoIc4fQ9-sx-hYWYKXBBPTvErbhWAP_XEV0FVs6sqe_5G4-T2JQfMLvDtqMdEf-GBOjLRZTkR6o4MxbFBYQ8YB8pttjy-z4Q-zkBPW4sr0g3PkgyJx99E5qIj=w525-h250-no?authuser=0" alt="Card image" />
            <div class="card-img-overlay">
              <h5 class="card-title">Crypto App</h5>
              <p class="card-text">An app that provides realtime statistics of all crypto currencies</p>
            </div>
          </a>



          <a rel="noopener" target="_blank" href="https://covid19-tra.herokuapp.com/" className="card bg-light text-dark">
            <img referrerPolicy="no-referrer" class="card-img" src="https://lh3.googleusercontent.com/8qWDFkzQS3Y2YI54cLV_6kQ2K5cG6zaTrGBLLZAC_U_h-INGx1H2ZsV0R_YaEqPa1GVMuHcpOXUGBjiiH2rMIpN8H24olVY7OQMPLeQcjdK_Bgf8EfVwO5pYq4E2J7nh2Z6_9ric9vz9P8HqOnXuMO5mTumsTG1eXLFpZI40J6iXWBBxCQvbOMVoGjVNeBE8mhrcSzOPXLFixL58J7779Z1-HQ1PpSK5zXA5w1QYhrRtvPt38NXDGzaU8ARbd_YsAY8RRVnZKdN_BhgtKMsdDnhzyMNUSNc1FjeIKSpGvBumvrb-xAfRaZUleQDJd9az09U3KLxpr2ne3B-B1vkPenjmwTLakokLH_ylv_6tgXWKNCdSoP2QaQYMpD10MgWqaz3rLxuu7imfbhXEDFQYrlS8tUg_ksUQd8Nn0qY0HvXlzC_ziuecZEzVO1IgeEbN7c_YWe--plhvLyWhW0ai5q-XgjCcaAdToJFxQtcqMAZbBaMlFGECi9tKN4NhtTyeFBwcVFs2il7JTaV3OWbpeFK0w1_VnThdQstskXLavZu-m99uTFlbVhwgHouSUhCxyc4azuagDKYQe5zBPfexF4z4rr9usxLk2OheNyMSvi6-ivrgquziqCrM3Bk6cScWERAZGTpRZn_0ESCi_TdIZ5HpLCXbpmKyWfLTQV2HBV5eI_p0csR8dALhWNP7d2iCocGyEdoGmwzdNs8rwDnXqH9JcL3tzGj-O3Gd9EOeAqCnnqlOcygqH-8YfDzZ=w1366-h654-no?authuser=0" alt="Card image" />
            <div className="card-img-overlay">
              <h5 className="card-title">Covid Tracker App</h5>
              <p className="card-text">An app that provides realtime statistics regarding covid 19 </p>
            </div>
          </a>





          <a rel="noopener" target="_blank" href="https://mehdirazanaqvi.github.io/chat-app/" className="card bg-light text-dark">
            <img referrerPolicy="no-referrer" class="card-img" src="https://lh3.googleusercontent.com/LG0NGWhZS5BKwzZhaqzwCZM2qhQRjBM4_WrROlZvGHVqeaUayB8LnqoDhP92lSND9qOt-N8Me48EsVdFVAKgz4kckZk0pTY5oZiR017ZTE1SgyBli8e2_tRp_zO6l1tMyHAPzyco-VZZ_HJFQSSkvOD_0U9jH4wkP6AvFcMSFNbtQll2E1J76L07Gt42fYoeOSc1GTN5rg1h8RuhsXM3a8dXRyvh2aOkueXkFd6EI6Vk8vy0mZDGP8eCZjy6CXKbYh0nbPh2DK2AxbsIsuyEJ-Gik_eL_YxHiH3Uc1cUqsApyKzeSQmPcTPXUIDxYwFFs5ukiYeaAuT0siO8I6wOLlAcKgGguLQka4aLbmuSniVwcxLZbfzgnyP4qn8g8jg1iTbZXZXDODfb59ajYO4QXjGe0-BXjaO4_I3ZGbN2tA7SCUiWZflbkhg38ikkf0OHcH9QMBSO7SzxW1ColIKo3BpBEzLaklPzSvakPzGPqFwW66A7YzzMR2-_6VhInswJ9S-1KDgOg7vp-tuonz9lTJlUu-XlT2m8FBbpYGwjAnNN1iIITmsbyCDdWm7SClEb3vnf8NnAaYr--rf3-hWFGJqCrEH44XvvqNDLyFU3yJHeD44KWTRgzneqrqKO21n4KabR46gRKsRj3vvOqIfnio42dcnrK2UdQB4FzehmQImAjxgZw4gHt5_A8rcgLY8K73SekrSwVPspjcWjQ8HsYnpidE53UWQ6Bn5TzFVpQB__3eb6UXKQ6cmfo_mv=w1364-h657-no?authuser=0" alt="Card image" />
            <div class="card-img-overlay">
              <h5 class="card-title">Chat app</h5>
              <p class="card-text">Chat app with socket.io</p>
            </div>
          </a>



          <a rel="noopener" target="_blank" href="https://mehdirazanaqvi.github.io/mart/" className="card bg-light text-dark">
            <img referrerPolicy="no-referrer" class="card-img" src="https://lh3.googleusercontent.com/ShBV9Y0o3MbY-A-k6S1wqKdJw4pOTHaPvD9Gy6e4vvIPNNF6WYktEsq-aeqPudWb7F0RsIzYdyyO4y66MYvyGjzebOXtzQXJqKJ1EWrzoNBklN9MhYF5cYYlp2v9Zom5Wj1K8eOvg-Xj65WaCPVuFy2vEi3q_kS4p8tmBMqcXSKawrIXpuR9QG6uli9Fms6aFivzVhsZ239OiudnZG1ppWOcviHfA8-Y4oBNI-sEGw9XLMauhx3uSiU8Ec9fuO_4mwRI4q0GgnazSd9JIax65nuNbWBYihPJzgiPw2tdiZtNI5XJlt1XalpHQfJw06DzlmNSNXP-_fwYtcP1UtnDMIs28Ddefh_fghgUUXZgUpbYHirSxS2RIBhVNp0SWWWYgTFkyJ7Rl7WSHLAF9f-U4QLQ3mMu4gAl9xfgbjAhHk6O8fEfYMoeTXTAq-cW1hVdmmQ1NzNi34L2WDI7U75pTMY0c7O16z6E-opsayfJT8vg5qt6X_X2wzCTAumS0PZo-ErBRG1BRNf3TleUNrdKh4TUST3K_YIB_SI1sZZc-Hoik5YRah3H77faeieRr0UoheZJh682QtWYJgj4NCaYFR2gwPjEzr5OTTZnMmYbkO0UL7TOODJ3DpqmTAXDAazKu0N6Jh-DHW6eJW_LtFepnbA__OnvIBDGEgS-Kt2GvgK7AiILL7qQsKac7k3a5v8NZ4tQZXFYYqL_NKHPfo-5YjtBnVS9XcEaMIZL7cb8MvzvZ2Dj71MnzA49B3VD=w1366-h655-no?authuser=0" alt="Card image" />
            <div class="card-img-overlay">
              <h5 class="card-title">Emart App</h5>
              <p class="card-text">Ecommerce App where users can post their products</p>
            </div>
          </a>



          <a rel="noopener" target="_blank" href="https://mehdirazanaqvi.github.io/delivery_app/" className="card bg-light text-dark">
            <img referrerPolicy="no-referrer" class="card-img" src="https://lh3.googleusercontent.com/WC0PvrRIXIMMHiA-PZo1P8p2fBuyAS3FzDXOg0S5hDEI0J80R1GCYa2xhFiH-JHpWyt-_aRtTY_HxpLHgWv8Zod_3lnibkr3SUrVvWFSCWAmGnezeZyJnMCS5lwlnGJEpcs3ZyIaoMA5YmL8nCAIoJSJP_mQr9g2WrgRqdRfvlP4GNIoFQHml7oP3SRReq3BU69MrSmzZs3TtpOmfApkokkJQhXsD_OSGQeLJOBtsOMO6Tu2qxn1YAyI2nVven4lsMkxEH2UOiFPFGAFPBCxkwj7kI9yFX3fbN5xyYemc37Ycnh5W_mFJpiqAMzCXZTxRwNdeKZHd-ulAYTlSIECD7CAa1mOQF9Gu-oAYoPsCqWbxjSIBBoSTEMigFfmkFEf8v_2HkxKyVvk1IsgJdAA-Hbe7TCm944XUX4PKehnTplotG_c5XNpc824I9mcZnNlTt0tVm61_sNrXa_KgHl-sgsY2mFVFBC9l-vxvq7dZ47mKGADI8-jQSTrCc4h7vFAZqRaFbuR7tw-9gfr0pn4vfFrt3aCExFRQ_Ckdh81FIxVyEw3Dg9qvDu9b72eTNNEjvMXJpwWEKowjxGlbqZb8A8tj9VlgB5XyaDtVGGQqs28SEHp5BToawfTFDLAsjChSXXQ6sDq6wtNjAMu6Rix7nD6-MYTSXAnJnmy10_4z_ZGLolcZTuW7iazi9z5EWStOgLzbkDALXCYeGHtFWIT1l3mJtFeAlgyc6cZO8NDFiUUM02ORP6glGloCLG_=w1366-h656-no?authuser=0" alt="Card image" />
            <div class="card-img-overlay">
              <h5 class="card-title">Grocery App</h5>
              <p class="card-text">An app that conatins all brands and deliver their products</p>
            </div>
          </a>



          <a rel="noopener" target="_blank" href="https://mehdirazanaqvi.github.io/react-redux-toolkit/" className="card bg-light text-dark">
            <img referrerPolicy="no-referrer" class="card-img" src="https://lh3.googleusercontent.com/nffGItHhZiWiEety7MRjgSCbK4b8Zq4W0fK7TCMxCWJ-nvHznzOsyvArrRUF8BG4wcZCYBP0lIe-FHpZkoSmd9onNxFGaj6Jw4Oqgvtk3hAZY0vxPass7gN-qg5R5263aUjz0VsxW3h0u3v7MoJ6OKO219VqJntlS-9xNk72e1ZIRhGEFgObdi10bLfRC8hN3HvIGDq3fJZ-JmjEsMBvhtHbZYv1pi5YpLFKbr8_9Ay1q0jxmm5HHqbzcjjnETCPnL_jKhpFEWHTfC_PoHaCcJ7gy85Gza63Rxn6uKADdNBY1Tcyqc33RTfgPdtQFzgbItpPPt4GRzP0-xTgaCrbEmfkOGRK_hItpazP0P47SuYzDdDGR0fB6sO2ZeUt3L9rC4LqEnhJFaiEREyFuEa2NUL5NXtPfQxpsU4YfIWR_B3TehoJsF9ubNiOqNR_zowIjAhEF3KxFu_qzFH7GYFK4xlrLjtnrEfcejEDPsv8o9jkvaCnuhnyFoQlX-0BSJ98annByjtX-Uk8MIfBhKhgU2oXxf6LSqi92oStGQc8WmqHHeve-nx9hm3gARz5Dn7VY_O4S2RMqYqqUczcHmrkucHLThqT-FbD1ZwnTDD_HVWeP2X0mclRdNlBfwnP3yGfuqEYAsbR4715FmgxO0r3SjITLDVqi897ldP_rllt4-mn_R7XfjcY_N28RgSFhULQB_0ndt4UR0mhbD5izlv7Z6YatcsSURoiMSyk0XM9VqpvvQ9jG-mMbTFBqssg=w1349-h631-no?authuser=0" alt="Card image" />
            <div class="card-img-overlay">
              <h5 class="card-title">Social App</h5>
              <p class="card-text">Users can post and see others posts</p>
            </div>
          </a>



          <a rel="noopener" target="_blank" href="https://mehdirazanaqvi.github.io/weather/" className="card bg-light text-dark">
            <img referrerPolicy="no-referrer" class="card-img" src="https://lh3.googleusercontent.com/LX4M6NLimAcGtr0mw6u827DyHmPpgAVAw9Y5Q6_zoAe6h47JVIh5MjCIbSQES3mkrznhiYzNXHznMFUHdMQLxBOlX2wG_hQjoZBf7-KIFBAsI1T5cTytFN2vfp6tICzlDXJxQ-Acc9JyOKT6fywWWKgCmXavS5GE1tnT6DDBXovsL4nY5bjU_0JqPKnTwbu6cRIY9HITmsKcMMd3SBWEhhQ98CStEjA6ld_369NW4CymiSJCtkWORfojd3ePFL3-3FhHPnCikWqaHSUodWhnlLMTlIq85NNVknfsA_MF0iXYcAODwi7npPvewZ4bh_CNzSCpQMslnkihGmq2SRNwlNfwzq_HMtWy-RAX-6mu4hBBP--aOYcl-1JNWrDzg2YxGkTOz-srp1igOHu3RBs6az3xIbzGkCjzD8NDPj7F2IbwwClHcYlEXk5fC2xxLh2cWwIyO3qhyiUqe7I-z2b2N446yLkca6d_cWmG6aCD6RECqzsaobphLoSYvtJmg43wloa5KxerHLi7OdgC0qQSeofr3Q_xY6KPSNZWn8YOZ0_dvfxf-icCM60quR0jM-gnMDGwwa6YBuhnBs5nWHjYVbXT9JM-sumsV2V61wNzHtAYTFVnvVeTP7Z8TfZZ8Jl9QCgHnZye_0JKr4C1Z3_ARfSG1WQZdvc_4f1uwiqlyu6OO9kg8lJsj9PYnVQKewHxiGrJIZt27mZRNfc1sJPOwWoYZwe0_r9kunUBnKvbsMt2YA8v1_8Z8d5oVsXD=w1366-h650-no?authuser=0" alt="Card image" />
            <div class="card-img-overlay">
              <h5 class="card-title">Weather App</h5>
              <p class="card-text">Shows realtime weather of current city of user or any city </p>
            </div>
          </a>




          <a rel="noopener" target="_blank" href="https://mehdirazanaqvi.github.io/ictg/" className="card bg-light text-dark">
            <img referrerPolicy="no-referrer" class="card-img" src="https://lh3.googleusercontent.com/2MranT0f7M8VJVojVYEok_K8v_HiESxFq2wgmFqjqQmhtaoc474pqHCuKLOOj2os0RIo3ayMjKTCX2Q85-FbWZwMC8l8N1rUQpkwaCrics0Kn2oDhpvbFBgWxnsUr8mxbBu5aIfp9QHYj_gSJFRe_OhgqfnkN8HrimpH_ODuGIveb6ea4WVfgVbh0MUenWNvj7OPotD8tIgTR5ZTpIOvXJCJlCJ_nRGFDh2Zu-qRqyp1iXYAhduhbvYIkq7lMaRb3tir5TGownf_iyPQ2zSkfrBuMCErk9uR4XJVQRC3I6FkL1g9oRNFFltiIaSs2KHvV693-8zr-6rRV8qd2Sbfy_1iRgci5PJg4SiUd__me28Et-uNtPrIba7MsQ2xBpGCsKJsFfdSFlufgpDItzTj6a-hsY2nYxKBMfYRWs3V7Wz_sfEY6wKU4VsAeb4cCEsWVIBbw94uxBW2fRBsBjliaXSAiEGAgFQTEG8-LPH1SEZAuI5ua9m-gFjw1M8EymNELGgDq9qMXMcd1zwRdIwr2w_oItyekLunzSr1T1NrN7sf3C3chV-jPWH1r5l2dKnE0IdE-8aWD6dChMSuZ6_HnB1OdyioZDvET8_kjSJlmbHjIsVd-qS4cEKzETGQC6mW_cVm_PNFE9peGxyznMk544prIpZ3ec7pE9xowHILpcXTw5lkGB5xvCW8jwcEG13vggTz11eRz1jhuNloAC1vSsY8IQvBg8RKaTo2bSTWwBbrvDUpfhx-Sgyw3coG=w1349-h656-no?authuser=0" alt="Card image" />
            <div class="card-img-overlay">
              <h5 class="card-title">Website for Client</h5>
              <p class="card-text">A custom website made for a client</p>
            </div>
          </a>




          <a rel="noopener" target="_blank" href="https://mehdirazanaqvi.github.io/quiz" className="card bg-light text-dark">
            <img referrerPolicy="no-referrer" class="card-img" src="https://lh3.googleusercontent.com/AbrWNQ2hpYPfJDpS-WtBacYvdBQxo717PlAdPRhtLel-KfQm7_g3gv3oZZcGPkDff5fy1udHiPhGrsjY9AnYcgvlaHxf-5Sr3DyijPlOxTvCmbakcFO5AXQ_mp6LChhEY_LdieL1L3lEOJI1eOaCGZn5KSRUUs6Nh5fvkw1H4l8JqSriufmJg1LPM9CJO1G9P8W9mMrVG2kZsQH0doYaYt2TEiIYjqzOzNAShT-q1UwEvlTC7Yo26UU31f-d4j1qtqZeFhTiS5YHMzb67FgTDeD9TF_6zr4YO3Ziu7xR5I4o92366o_dn4OCqCddpmNlOA8RcjCwoSFmM5O5qnFoFu_AvnRuaxGISgS9-s7zgFUiOOaYW9vF9KYi8uiaBY-E1QuVMb-vUJzvcf_NvqqSoq33rmJhsQLY6xc6atVDNOVckM1LC-LuWvknIPH16YRGmCio-BQZTdi7FSiyuXSKTvNY901vW9oYCNELLFt-YKPhuc1gv-ne66pSvZqOsfDXcAtWkQVuirVHAjNpzAi8KOkCCT_TY1uTuR_iBRYhPTSY0DlEKz87NCQYKxLYxm2Ig4XevN1OOIhzIfjdKJJdpVH8w8svyemcOAgpB4k3-LsfResA3f71AYkhM65NhYeuC8AB0p0foJYe1ICx89GED8sZj3gOYcDdlHe7TE1WxKxuECA9yguGXcNvK1wjk-BAl5Bq5tss9V6ITDgfToKteOntIxFF98FDDWwopreyJRsXNBEGSPh4xmk3LVqP=w1366-h654-no?authuser=0" alt="Card image" />
            <div class="card-img-overlay">
              <h5 class="card-title">Quiz app</h5>
              <p class="card-text">Quiz app for teachers and organizations</p>
            </div>
          </a>






          <a rel="noopener" target="_blank" href="https://mehdirazanaqvi.github.io/object-detector" className="card bg-light text-dark">
            <img referrerPolicy="no-referrer" class="card-img" src="https://upload.wikimedia.org/wikipedia/commons/3/38/Detected-with-YOLO--Schreibtisch-mit-Objekten.jpg" alt="Card image" />
            <div class="card-img-overlay">
              <h5 class="card-title">Object detector</h5>
              <p class="card-text">Detect and classifies objects through webcam</p>
            </div>
          </a>




          <a rel="noopener" target="_blank" href="https://mehdirazanaqvi.github.io/voting-app" className="card bg-light text-dark">
            <img referrerPolicy="no-referrer" class="card-img" src="https://lh3.googleusercontent.com/XxgREdC7mTQpo2cCYSY2ktWZLt2PuzoStTrnNidVpwnrS54BLBB-pUL1-8_0QxxgLXoIQflXWDK9eaRXHsCCBTnHbYY5dkd53F65ddzl0u7nFQW6QCwHu7U639dQlL-XXj7Fnof1zPZlTYK5xanSM7OH_qGtTFvRsUpoI8uhjBjBhAoVzDjKmn0YB9u3gjrFIA2g2Fpkd1PvMxp6XL1Kx2T8q1ORMbHmTiPipwrfRMA4b3YYIb92jgSoOf9ZvY4DZgX1H_CFl5p9ZAYoUNhqRk9j57RgjIsyWYVPoYrim-Zf0BcRucb35ipSp9xTKc5dZFdFV1tXXDcxjSSq7HFUq8oaOI6rbxBCOko-W8QAsaY8Oplb_NELJ6JG6D0ytzJI2CbWDzxR4oFGDvbliXJIu9Xhk6Ue6JiRVoS9jbpYdHTx5YGmF13MX21brL2FgZDaacpKEgCo3UVZkd8y1yVePXkd2yZPCO0StiR-xI0Gh90ArGVxsC66_z4ImDqkDi5Jo_RsHG7dXAyFBcqrKXanCa8j6BzgGnFbu7DUPM_V343ErLWlJn9t0JVXpHZXE7GeqiJvWf2evIwD5qGsxIyv2t4drL9yiHYbbnw2tQDqMVmQSu3-WgB-S2VMSnCtoJg46TyfaupcHXVTvUvEj1sptlqy-sZhQrVvGx6CCISgtxpNAqCTuFHyReCNAWhqk_PfYdSf4wea97zw9YoavNBAY6xvY7Lnxv1DYnek5lYYM9pixUBPKn4tz5Iklz19=w1366-h654-no?authuser=0" alt="Card image" />
            <div class="card-img-overlay">
              <h5 class="card-title">Voting app</h5>
              <p class="card-text">An online voting app</p>
            </div>
          </a>








        </span>

      </div>







      <div className="page2" id="message_me">


        <div className="heading" > <p className="orange">Message Me</p> </div>

        <span className="partial" >

          <div className="text message">

            <form onSubmit={(e) => sendemail(e)}>

              <input name="name" type="text" placeholder="Enter your Name" className="form-control" />
              <input name="user_email" placeholder="Enter Your Email" type="text" className="form-control" />
              <input name="message" placeholder="Enter Message" type="text" className="form-control" />


              <input className="btn btn-outline-light" type="submit" value="Send" />

            </form>


          </div>





        </span>

      </div>













    </div >










  )

}


export default App