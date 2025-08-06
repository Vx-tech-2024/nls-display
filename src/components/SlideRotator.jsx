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
import MotivationalQuoteSlide from './MotivationalQuoteSlide';
import HRPolicySlide from './HRPolicySlide';
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
import customerRatings from '../data/customerRatings.js';
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

function shouldShowNewHires() {
  const now = new Date();

  return newHires.some((hire) => {
    if (!hire.startDate) return false;
    const start = new Date(hire.startDate);
    const diffDays = (now - start) / (1000 * 60 * 60 * 24);
    return diffDays >= 0 && diffDays <= 15;
  })
}

function shouldShowMiniAwards() {
  const today = new Date();
  const toMidnight = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  };
  const isThisWeek = (dateStr) => {
    const date = toMidnight(new Date(dateStr));
    const todayMidnight = toMidnight(today);

    const dayOfWeek = todayMidnight.getDay();
    const startOfWeek = new Date(todayMidnight);
    startOfWeek.setDate(todayMidnight.getDate() - dayOfWeek + 1);
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);

    return date >= startOfWeek && date <= endOfWeek;
  };
  return miniAwards.some((award) => isThisWeek(award.awardDate));
}

function shouldShowUpcomingEvents() {
  const today = new Date();
  return upcomingEvents.some(event => new Date(event.date) >= today);
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

    if (shouldShowNewHires()) {
      activeSlides.push(<NewHiresSlide key="newHires" />);
    }

    if (shouldShowTeamSpotlight()) {
      activeSlides.push(<TeamSpotlightSlide key="spotlight" />);
    }

    if (hasSpecialDatesToday()) {
      activeSlides.push(<SpecialDatesSlide key="specialDates" />);
    }

    if (shouldShowMiniAwards()) {
      activeSlides.push(<MiniAwardsSlide key="miniAwards" />);
    }

    if (techTips && techTips.title) {
      activeSlides.push(<TechTipSlide key="techTips" />);
    }

    //activeSlides.push(<MDMessageSlide key="md-message" />);
    activeSlides.push(<MotivationalQuoteSlide key="quote" />);
    activeSlides.push(<HRPolicySlide key="hr" />);

    if (shouldShowUpcomingEvents()) {
      activeSlides.push(<UpcomingEventsSlide key="events" />);
    }

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
    }, 50000);

    return () => clearInterval(interval);
  }, [slides]);

  return(<SlideLayout>{slides[currentIndex] || null}</SlideLayout>) ;
}

export default SlideRotator;
