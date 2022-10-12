import PropTypes from "prop-types";
import React, { Fragment, memo } from "react";

import { LongForWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import LongForItem from "@/components/long-for-item";
import ScrollView from "@/base-ui/scroll-view";

const LongFor = memo((props) => {
  const { infoData } = props;
  return (
    <LongForWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <ScrollView>
        <div className="list-wrapper">
          <div className="long-for-list">
            {infoData.list.map((i) => (
              <Fragment key={i.city}>
                <LongForItem itemData={i} />
              </Fragment>
            ))}
          </div>
        </div>
      </ScrollView>
    </LongForWrapper>
  );
});

LongFor.propTypes = {
  infoData: PropTypes.object
};

export default LongFor;
