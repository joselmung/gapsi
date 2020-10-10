import React from "react";
import InfiniteScroll from "react-infinite-scroller";

const VirtualScroll = ({loadFunc,items}) => {
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadFunc}
      hasMore={ false}
      loader={
        <div className="loader" key={0}>
          Loading ...
        </div>
      }
    >
      {items}
    </InfiniteScroll>
  );
};

export default VirtualScroll;
