
import React, {Component} from 'react';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";

import HeaderSec from '../component/header_sec.js';
import Banner from '../component/banner.js';
import IntroSec from '../component/intro_sec.js';
import CornorSec from '../component/cornor_sec.js';
import ActivitiesSec from '../component/activities_sec.js';
import InnovateSec from '../component/innovate_sec.js';
import LanguageSec from '../component/language_sec.js';
import BharatDarshan from '../component/bharat_darshan.js';
import QuizSec from '../component/quiz_sec.js';
import StorySec from '../component/story_sec.js';
import GallerySec from '../component/gallery_sec.js';
import FooterSec from '../component/footer_sec.js';






class Home extends Component {


    render(){
        
        return(
            <div>
                <HeaderSec/>
              
               <Banner/>
               <IntroSec/>
               <CornorSec/>
               <ActivitiesSec/>
               <InnovateSec/>
               <LanguageSec/>
               <BharatDarshan/>
               <QuizSec/>
               <StorySec/>
               <GallerySec/>
               <FooterSec/>
            </div>
        );

        
    }

}
export default  Home;