type IndicatorProps = {
  display: boolean;
  isSuccess?: boolean;
};

function Indicator({ display, isSuccess }: IndicatorProps) {
  if (!display) return <></>;
  return <span>{isSuccess ? "✅" : "❌"}</span>;
}

export default Indicator;
