import "../scss/Login.scss";

export default function Login(props){
    const {open,close} = props;

    return(
        <div id="logWrap">
            { open ? (
                <div id="logArea">
                    <h3><span>로그인</span>해서 댓글 쓰기</h3>
                    <div id="logDesc">
                        <button id="cizionBtn" onClick={close}>시지온으로 로그인</button>
                    </div>
                    <p id="coppyName">&copy;조아현</p>
                </div>
            ) : null}                        
        </div>
    )
}