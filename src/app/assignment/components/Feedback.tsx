// 7.21 - feedback modal ui - (LJH)

const Feedback = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-[775px] w-4/5 rounded-[10px] border border-grayscale-10 shadow-4dp bg-grayscale-0">
        <div className="p-[34px] ">
          {/* modal-header */}
          <div className="flex justify-between mb-[26px]">
            <h3 className="font-[700] text-[20px]">상세보기</h3>
            <button>X</button>
          </div>
          {/* uploaded */}
          <div className="flex-col rounded-[10px] border border-grayscale-10 bg-grayscale-0 p-[24px_24px_16px_24px] mb-[12px]">
            <div className="flex mb-[22px] items-center">
              <img
                className="w-[42px] rounded-full border-grayscale-10 border mr-[13px]"
                src=""
                alt="img"
              />
              <h4 className="font-[700]">
                {"이름"}
                <span className="text-grayscale-20 font-[400]">
                  {" "}
                  &middot; {"수강생"}
                </span>
              </h4>
            </div>
            <ul className="space-y-[12px] mb-[10px]">
              <li>파일 & 링크</li>
              <li>파일 & 링크</li>
              <li>파일 & 링크</li>
            </ul>
            <h6 className="text-[12px] text-end text-grayscale-40">
              {"3일전"}
            </h6>
          </div>
          {/* feedback */}
          <ul className="space-y-[13px] mb-[18px]">
            <li className="rounded-[10px] border border-grayscale-10 bg-grayscale-0 p-[24px_24px_16px_24px]">
              <div className="flex mb-[18px] items-center">
                <img
                  className="w-[42px] rounded-full border-grayscale-10 border mr-[13px]"
                  src=""
                  alt="img"
                />
                <h4 className="font-[700]">
                  {"이름"}
                  <span className="text-grayscale-20 font-[400]">
                    {" "}
                    &middot; {"수강생"}
                  </span>
                </h4>
              </div>
              <p className="text-[12px]">{"본문"}</p>
              <h6 className="text-[12px] text-end text-grayscale-40">
                {"3일전"}
              </h6>
            </li>
            <li className="rounded-[10px] border border-grayscale-10 bg-grayscale-0 p-[24px_24px_16px_24px]">
              <div className="flex mb-[18px] items-center">
                <img
                  className="w-[42px] rounded-full border-grayscale-10 border mr-[13px]"
                  src=""
                  alt="img"
                />
                <h4 className="font-[700]">
                  {"이름"}
                  <span className="text-grayscale-20 font-[400]">
                    {" "}
                    &middot; {"수강생"}
                  </span>
                </h4>
              </div>
              <p className="text-[12px]">{"본문"}</p>
              <h6 className="text-[12px] text-end text-grayscale-40">
                {"3일전"}
              </h6>
            </li>
          </ul>
          {/* feedback_upload */}
          <div className="rounded-[10px] border border-grayscale-10 bg-grayscale-0 p-[12px_20px]">
            <div className="flex mb-[8px] items-center">
              <img
                className="w-[34px] h-[34px] rounded-full border-grayscale-10 border mr-[13px]"
                src=""
                alt="img"
              />
              <h4 className="font-[500] text-grayscale-60">{"이름"}</h4>
            </div>
            <form className="flex justify-between">
              <input
                className="outline-none placeholder:text-grayscale-20"
                placeholder="댓글을 입력해주세요."
              />
              <button className="bg-primary-80 p-[5px_32px] text-white text-[14px] font-[500] rounded-md">
                업로드
              </button>
            </form>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Feedback;