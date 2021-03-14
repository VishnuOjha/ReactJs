import * as React from "react";

const Triangle = React.forwardRef((_, ref: React.Ref<SVGPolygonElement>) => {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100">
      <polygon points="0,0 80,50 0,100" fill="#FFCE24" ref={ref} />
    </svg>
  );
});

export default Triangle;
