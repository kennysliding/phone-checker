const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

type NumberPadProps = {
  inputFunc: (value: number) => any;
  cancelFunc: () => any;
};

function NumberPad({ inputFunc, cancelFunc }: NumberPadProps) {
  return (
    <div className="number-pad grid grid-cols-3 gap-4 m-2 justify-end">
      {numbers.map((number) => (
        <>
          {number === 0 && <span key="blank" />}
          <button
            type="button"
            key={number}
            value={number}
            className="bg-gray-500 text-white"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              event.stopPropagation();
              inputFunc(parseInt(event.currentTarget.value));
            }}
          >
            {number}
          </button>
        </>
      ))}
      <button
        key="cancel"
        type="button"
        className="bg-red-500 text-white"
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          event.stopPropagation();
          cancelFunc();
        }}
      >
        {"<-"}
      </button>
    </div>
  );
}

export default NumberPad;
