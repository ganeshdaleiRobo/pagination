import React from 'react';
import { storiesOf } from "@storybook/react";
import Footer from './footer/Footer';
import Header from './header/Header';
import JobsOrganisms from './jobs/JobsOrganisms';
storiesOf("Organisms", module)
.add("Footer", () => <Footer/>)
.add("Header", () => <Header/>)
.add("Jobs", () => <JobsOrganisms/>)