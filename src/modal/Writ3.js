import "../scss/Writ2.scss";
import { useRef, useState } from "react";
import { useHistory } from "react-router";

export default function Writ3(props,{comm : c}){
    //불러온 값 열고 닫기
    const {open3, close3} = props;
    const [comm, setComm] = useState(c);
    //작성후 이동
    const histroy = useHistory();
    //금지어
    const [filt,setfilt]=useState(['금지어']); 

    function onSubmit(){
        //금지어
        if(conRef.current.value===filt[0]){
            alert("금지어 발견, 단어를 대체합니다.");   
            setfilt(filt);    
            conRef.current.value="금지어 발견";
        } 
        
        //수정
        fetch(`http://localhost:3001/comment/${props.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...props,
                content : conRef.current.value,
            }),
        }).then(res => {
            if (res.ok) {                
                alert("댓글 수정이 완료 되었습니다.");
                histroy.push(`/`);
                setComm(comm);
            }
        });
    }
    const conRef = useRef(null);

    return(
        <div id="reWriteWrap">
            { open3 ? (
            <div id="reWriteArea">
                <div className="reWriteUser">
                    <p><b>userid</b></p>
                </div>
                <form>
                    <fieldset>
                        <legend>댓글 작성</legend>
                        <p className="reWriteGo"><textarea title="댓글 작성시 상대방에 대한 배려와 책임을 담아주세요" placeholder="댓글 작성시 상대방에 대한 배려와 책임을 담아주세요" autoFocus required ref={conRef}></textarea></p>
                        <p className="reWriteBtn" onClick={onSubmit}><button onClick={close3}>댓글 등록</button></p>
                    </fieldset>                
                </form>
            </div>   
            ) : null }
        </div>
    )
}