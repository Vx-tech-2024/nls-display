import { useState, useEffect, useMemo } from 'react';

import LogoSlide from './LogoSlide';
import MissionSlide from './MissionSlide';
import Milestones from './Milestones';
import EmployeeOfTheMonth from './EmployeeOfTheMonth';
import NewHiresSlide from './NewHiresSlide';
import TeamSpotlightSlide from './TeamSpotlightSlide';
import SpecialDatesSlide from './SpecialDatesSlide';
import MiniAwardsSlide from './MiniAwardsSlide';
import TechTipSlide from './TechTipSlide';
import PolicyRemindersSlide from './PolicyRemindersSlide';
import MotivationalQuoteSlide from './MotivationalQuoteSlide';
import HRAnnouncementsSlide from './HRAnnouncementsSlide';
import UpcomingEventsSlide from './UpcomingeventsSlide';
import GameWinnersSlide from './GameWinnersSlide';
import MDMessageSlide from './MDMessageSlide';
import CustomerRatings from './CustomerRatings';
import Projects from './Projects';

// Data imports
import employeeOfTheMonth from '../data/employeeOfTheMonth';
import newHires from '../data/newHires';
import teamSpotlight from '../data/teamSpotlight';
import gameWinners from '../data/gameWinners';
import miniAwards from '../data/miniAwards';
import techTips from '../data/techTips';
import hrAnnouncements from '../data/hrAnnouncements';
import mdMessage from '../data/mdMessage';
import motivationalQuote from '../data/motivationalQuote';
import policyTip from '../data/policyTip';
import specialDates from '../data/specialDates';
import upcomingEvents from '../data/upcomingEvents';
import customerRatings from '../data/customerRatings';
import SlideLayout from './SlideLayout';

function hasSpecialDatesToday() {
  const today = new Date().toISOString().slice(0, 10);
  return (
    specialDates.birthdaysToday.some(b => b.date === today) ||
    specialDates.anniversariesToday.some(a => a.date === today)
  );
}

function shouldShowTeamSpotlight() {
  const today = new Date();
  const day = today.getDay(); 
  return (day === 4 || day === 5) && teamSpotlight && teamSpotlight.name;
}

function SlideRotator() {
  const slides = useMemo(() => {
    const activeSlides = [];

    activeSlides.push(<LogoSlide key="logo" />);
    activeSlides.push(<MissionSlide key="mission" />);
    activeSlides.push(<Milestones key="milestones" />);
    activeSlides.push(<Projects key="projects" />);
    activeSlides.push(<CustomerRatings key="customerRatings" />);
    activeSlides.push(<EmployeeOfTheMonth key="employeeOfTheMonth" />);

    if (newHires && newHires.length > 0) {
      activeSlides.push(<NewHiresSlide key="newHires" />);
    }

    if (shouldShowTeamSpotlight()) {
      activeSlides.push(<TeamSpotlightSlide key="spotlight" />);
    }

    if (hasSpecialDatesToday()) {
      activeSlides.push(<SpecialDatesSlide key="specialDates" />);
    }

    if (miniAwards && miniAwards.length > 0) {
      activeSlides.push(<MiniAwardsSlide key="miniAwards" />);
    }

    if (techTips && techTips.title) {
      activeSlides.push(<TechTipSlide key="techTips" />);
    }

    activeSlides.push(<MDMessageSlide key="md-message" />);
    activeSlides.push(<PolicyRemindersSlide key="policy" />);
    activeSlides.push(<MotivationalQuoteSlide key="quote" />);
    activeSlides.push(<HRAnnouncementsSlide key="hr" />);
    activeSlides.push(<UpcomingEventsSlide key="events" />);

    if (gameWinners && gameWinners.length > 0) {
      activeSlides.push(<GameWinnersSlide key="games" />);
    }

    return activeSlides;
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (slides.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
    }, 45000);

    return () => clearInterval(interval);
  }, [slides]);

  return(<SlideLayout>{slides[currentIndex] || null}</SlideLayout>) ;
}

export default SlideRotator;
