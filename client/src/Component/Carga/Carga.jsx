import React from "react";
import style from './Carga.module.css'


const Carga = () => {

    return (
        <div className={style.body}>
            <div class={style.pagination}>
                <input class={style.input} id="dot-1" type="radio" name="dots" />
                <label class={style.label} for="dot-1"></label>
                <input class={style.input} id="dot-2" type="radio" name="dots" />
                <label class={style.label} for="dot-2"></label>
                <input class={style.input} id="dot-3" type="radio" name="dots" checked="checked" />
                <label class={style.label} for="dot-3"></label>
                <input class={style.input} id="dot-4" type="radio" name="dots" />
                <label class={style.label} for="dot-4"></label>
                <input class={style.input} id="dot-5" type="radio" name="dots" />
                <label class={style.label} for="dot-5"></label>
                <input class={style.input} id="dot-6" type="radio" name="dots" />
                <label class={style.label} for="dot-6"></label>
                <input class={style.input} id="dot-7" type="radio" name="dots" />
                <label class={style.label} for="dot-7"></label>
                <input class={style.input} id="dot-8" type="radio" name="dots" />
                <label class={style.label} for="dot-8"></label>
                <div class={style.pacman}></div>
            </div>

        </div>



    )

}

export default Carga;

















