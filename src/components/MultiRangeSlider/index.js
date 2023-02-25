import React, { useCallback, useEffect, useState, useRef } from "react";
import styles from "./index.module.scss";

const Index = ({ min, max, bottom, top, onChange }) => {
    const [minVal, setMinVal] = useState(bottom);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef(min);
    const maxValRef = useRef(max);
    const range = useRef(null);

    // Convert to percentage
    const getPercent = useCallback(
        (value) => Math.round(((value - min) / (max - min)) * 40),
        [min, max]
    );

    // Set width of the range to decrease from the left side
    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxValRef.current);

        bottom = minVal;

        if (range.current) {
            range.current.style.left = `${minPercent+3}vw`;
            range.current.style.width = `${maxPercent - minPercent}vw`;
        }
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(maxVal);

        top = maxVal;

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}vw`;
        }
    }, [maxVal, getPercent]);

    useEffect(() => {
        setMaxVal(top);
        setMinVal(bottom)
    },[top,bottom])

    // Get min and max values when their state changes
    useEffect(() => {
        onChange({top: maxVal, bottom:minVal });
    }, [minVal, maxVal, onChange]);

    return (
        <div className={styles.container}>
            <input
                type="range"
                min={min}
                max={max}
                value={minVal}
                onChange={(event) => {
                    const value = Math.min(Number(event.target.value), maxVal - 1);
                    setMinVal(value);
                    minValRef.current = value;
                }}
                className={`${styles.thumb} ${styles.thumb__left}`}
                style={{ zIndex: minVal > max - 100 && "5" }}
            />
            <input
                type="range"
                min={min}
                max={max}
                value={maxVal}
                onChange={(event) => {
                    const value = Math.max(Number(event.target.value), minVal + 1);
                    setMaxVal(value);
                    maxValRef.current = value;
                }}
                className={`${styles.thumb} ${styles.thumb__right}`}
            />

            <div className={styles.slider}>
                <div className={styles.slider__track}/></div>
                <div ref={range} className={styles.slider__range}></div>
            </div>
    );
};

export default Index;
