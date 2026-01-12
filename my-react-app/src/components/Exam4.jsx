// 상태 끌어올리기(State lifting up)
// : 자식 컴포넌트의 상태를 부모에게 끌어올려
// 부모에서 이용 가능하도록 해주는 것

import { useState } from "react"

// 부모 컴포넌트
// 부모 컴포넌트
const Exam4 = () => {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    // 상태를 업데이트하는 핸들러 함수들
    const onChangeId = (e) => setId(e.target.value);
    const onChangePw = (e) => setPw(e.target.value);

    return (
        <div>
            {/* 1. 부모의 함수를 props로 전달 */}
            <Id onChangeId={onChangeId} />
            <Pw onChangePw={onChangePw} />
            
            <div>
                {/* 2. 부모가 관리하는 id, pw 상태에 따라 버튼 활성화 여부 결정 */}
                <button disabled={id.length === 0 || pw.length === 0}>
                    Login
                </button>
            </div>
            <p>입력된 ID: {id}</p>
        </div>
    );
};

// 자식 컴포넌트 Id
const Id = ({ onChangeId }) => {
    // 내부의 useState와 onChangeId 함수는 삭제합니다. (부모가 관리하므로)
    return (
        <div>
            <label>ID : </label>
            <input onChange={onChangeId} />
        </div>
    );
};

// 자식 컴포넌트 Pw
const Pw = ({ onChangePw }) => {
    // props로 전달받은 onChangePw를 input의 onChange에 연결합니다.
    return (
        <div>
            <label>PW : </label>
            <input type="password" onChange={onChangePw} />
        </div>
    );
};
export default Exam4;