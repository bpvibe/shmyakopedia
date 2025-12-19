import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MainPage.module.scss';
import shmyakImage from '../../images/shmyak-umni.png';

const MainPage = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/story');
    };

    return (
        <div className={styles.MainPage}>
            <div className={styles['main-page__content']}>
                <img
                    className={styles['main-page__content-image']}
                    src={shmyakImage}
                    alt="Умный кот мягкой и плотной консистенции"
                />
            </div>
            <div className={styles['main-page__content-text']}>
                <p> Шмяк!</p>
                <p>Что вы представляете, слыша это слово? Каково оно на «вкус»?</p>
                <p>Если вы ещё не знаете про моего кота
                    , то ваши мысли по поводу этого слова вас обманывают.
                </p>
                <p> Позвольте познакомить вас с истинной шмячностью,
                    с неповторимой мягкостью и впечатляющей плотностью. Почему мягкость и плотность? Потому что так моего
                    кота Шмяка охарактеризовал ветеринар.
                </p>
                <p>Мягкий и плотный. Бодрый и бойкий. Одним словом, шмячный. Это он.
                    Это мой кот Шмяк. Добро пожаловать, друг.
                </p>
                <button
                    className={styles['main-page__content-button']}
                    onClick={handleButtonClick}
                >
                    ШМЯЧНУТЬСЯ
                </button>
            </div>
        </div>
    );
};

export default MainPage;