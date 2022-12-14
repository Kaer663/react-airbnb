import React, { Fragment, memo, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { TabsWrapper } from "./style";
import ScrollView from "@/base-ui/scroll-view";

const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props;
  const [tabName, setTabName] = useState(tabNames[0] || "");

  const handleClick = (i) => {
    setTabName(i);
    tabClick(i);
  };

  return (
    <ScrollView>
      <TabsWrapper>
        <div className="location">
          <div className="main">
            {tabNames.map((i) => (
              <Fragment key={i}>
                <div
                  className={classNames({
                    item: true,
                    active: i === tabName
                  })}
                  onClick={() => handleClick(i)}
                >
                  {i}
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </TabsWrapper>
    </ScrollView>
  );
});

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
  tabClick: PropTypes.func,
  currentName: PropTypes.string
};
// tabBanes => string[]
// tabClick => (i:string)=>void

export default SectionTabs;
