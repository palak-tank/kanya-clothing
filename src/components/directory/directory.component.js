import React from "react";
import "../directory/directory.style.scss";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectDirectorySection} from "../../redux/directory/directory.selector"

const Directory = ({sections}) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps}></MenuItem>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections:selectDirectorySection
})



export default connect(mapStateToProps)(Directory);
