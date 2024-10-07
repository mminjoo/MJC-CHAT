import style from '@/styles/chat.module.css'

export default function Chat() {
    return (
        <div className={style.container}>
            <div className={style.menu}>
                <div className={style.menu_header}>
                    <div>
                        <img src='Chat-minimum.png' alt="" />
                    </div>
                    <div>
                        <img src='new_chat.png' alt="" />
                    </div>
                </div>
                <div className={style.menu_chatlist}>
                    <div>
                        <span>우리 학교의 설립목적이 뭐야?</span>
                        <img src="Vector.png" alt='' />
                    </div>
                    <div>
                        <span>오늘 학식 메뉴 알려줄래?</span>
                        <img src="Vector.png" alt='' />
                    </div>
                    <div>
                        <span>학교 주변 지하철 역을 알려줘</span>
                        <img src="Vector.png" alt='' />
                    </div>
                    <div>
                        <span>학생 식당 위치를 알려줘</span>
                        <img src="Vector.png" alt='' />
                    </div>
                    <div>
                        <span>우리 학교 위치 알려줄래?</span>
                        <img src="Vector.png" alt='' />
                    </div>
                    <div>
                        <span>AI빅데이터 학과에 대해 알려줘</span>
                        <img src="Vector.png" alt='' />
                    </div>
                </div>
            </div>
            <div className={style.main}>
                <div className={style.main_header}>
                    <div>
                        <img src="Settings.png" alt="" />
                    </div>
                </div>
                <div className={style.main_chat}>
                    
                </div>
            </div>
        </div>
    )
}