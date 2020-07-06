import React from 'react';
import { storiesOf } from "@storybook/react";
import Search from './search/Search';
import JobCard from './jobCards/JobCard';
storiesOf("molecules", module)
  .add("Search", () => <Search/>)
  .add("Cards", () => <JobCard  Title="Title"
  Link="Link"
  time="Time"/>)