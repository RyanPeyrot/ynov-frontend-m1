import React, {useContext, useEffect, useState} from 'react';
import styles from './index.module.scss'
import filter from '../../../public/filter.png'
import FilterModal from "../FilterModal";
import MultiRangeSlider from "../MultiRangeSlider";
import placeService from "../../service/place.service";
import CheckboxLabel from "../CheckboxLabel";
import placeContext from "../../context/PlaceContext";

const Index = () => {
    const {updateFilter,resetFilter} = useContext(placeContext)

    const [placeTypes,setPlaceTypes] = useState([]);
    const minimal = 0;
    const maximal = 100;
    const [bottomVal,setMinVal] = useState(0);
    const [topVal,setMaxVal] = useState(100);
    const [selectedPlaceTypes,setSelectedPlaceTypes] = useState([]);
    const [selectedCapacity,setSelectedCapacity] = useState('all');

    const [modal, setModal] = useState({
        show : false
    })

    useEffect(() => {
        placeService.getAllTypePlace().then(res => {
            setPlaceTypes(res);
        })
    },[])

    function handleModal() {
        if(modal.show){
            setModal({show : false});
        } else {
            document.body.style.overflow = "hidden"
            setModal({show : true});
        }
    }

    function updateSliderBottom(e){
        if(e.target.value === ''){
            return 0;
        }
        else if(e.target.value < minimal){
            e.target.value = minimal;
        }
        else if(e.target.value > topVal){
            e.target.value = topVal-1;
        }
        setMinVal(e.target.value);
    }
    function updateSliderTop(e){
        if(e.target.value === ''){
            return 0;
        }
        else if(e.target.value < bottomVal){
            e.target.value = bottomVal+1;
        }
        else if(e.target.value > maximal){
            e.target.value = maximal;
        }
        setMaxVal(e.target.value);
    }

    function onFocus(e){
        e.target.parentNode.parentNode.style.boxShadow = 'inset 0 0 0 2px #000';
        e.target.addEventListener('focusout',() => {
            e.target.parentNode.parentNode.style.boxShadow = 'inset 0 0 0 1px #B0B0B0';
        })
    }
    function selectPriceFork(e){
        setMinVal(e.bottom);
        setMaxVal(e.top);
        document.getElementById("inBottom").value = e.bottom;
        document.getElementById("inTop").value = e.top;
    }

    function selectCapacity(e){
        document.getElementsByClassName(styles.active)[0].classList.replace(styles.active,styles.inactive);
        e.target.classList.replace(styles.inactive,styles.active);
        setSelectedCapacity(e.target.value);
    }

    function selectPlaceType(e){
        let updatedTable = selectedPlaceTypes;
        if(e.target.checked){
            if(!selectedPlaceTypes.includes(e.target.value)){
                updatedTable.push(e.target.value);
            }
        } else {
            if(selectedPlaceTypes.includes(e.target.value)){
                updatedTable.splice(updatedTable.indexOf(e.target.value),1);
            }
        }
        setSelectedPlaceTypes(updatedTable)
    }

    function clearFilter(){
        setMaxVal(maximal);
        setMinVal(minimal);

        setSelectedCapacity('all')
        document.getElementsByClassName(styles.active)[0].classList.replace(styles.active,styles.inactive);
        document.getElementsByClassName(styles.capacity__item)[0].classList.replace(styles.inactive,styles.active);

        document.getElementsByClassName(styles.placeTypeWrapper__content)[0].childNodes.forEach((item) => {
            item.firstChild.checked = false;
        });
        setSelectedPlaceTypes([]);
        resetFilter();
    }

    function validFilter(){
        const filter = {
            maxPrice:topVal,
            minPrice:bottomVal,
            capacity:selectedCapacity,
            placeType:selectedPlaceTypes,
        }
        updateFilter(filter);
    }



    return (
        <div>
            <div onClick={handleModal} className={styles.moreBtn}>
                <img src={filter.src}/>
                <span>Filters</span>
            </div>
            <FilterModal clearFilter={clearFilter} validFilter={validFilter} show={modal.show} modalTitle={"Filters"} handleModal={handleModal}>
                <section className={styles.priceWrapper}>
                    <h2>Pricing</h2>
                    <div className={styles.priceWrapper__content}>
                        <MultiRangeSlider
                            min={minimal} bottom={bottomVal}
                            onChange={(e)=>selectPriceFork(e)}
                            max={maximal} top={topVal}>
                        </MultiRangeSlider>
                        <div className={styles.priceInputWrapper}>
                            <div className={styles.priceInputBox}>
                                <div className={styles.priceInputBox__label}>Minimal price</div>
                                <div className={styles.priceInputBox__content}>
                                    <div><span>€</span></div>
                                    <input id="inBottom" min={minimal} max={topVal-1} defaultValue={bottomVal} onInput={e => updateSliderBottom(e)} onFocus={(e) => onFocus(e)} type="text"/>
                                </div>
                            </div>
                             <span>-</span>
                            <div className={styles.priceInputBox}>
                                <div className={styles.priceInputBox__label}>Maximal price</div>
                                <div className={styles.priceInputBox__content}>
                                    <div><span>€</span></div>
                                    <input id="inTop" min={bottomVal+1} max={maximal} defaultValue={topVal} onInput={e => updateSliderTop(e)} onFocus={(e) => onFocus(e)} type="text"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.capacityWrapper}>
                    <h2>Capacity</h2>
                    <div className={styles.capacityWrapper__content}>
                        <button value={'all'} type="checkbox" className={`${styles.capacity__item} ${styles.active}`} onClick={e => selectCapacity(e)}>
                            ALL
                        </button>
                        <button value={1} className={`${styles.capacity__item} ${styles.inactive}`} onClick={e => selectCapacity(e)}>
                            1
                        </button>
                        <button value={2} className={`${styles.capacity__item} ${styles.inactive}`} onClick={e => selectCapacity(e)}>
                            2
                        </button>
                        <button value={3} className={`${styles.capacity__item} ${styles.inactive}`} onClick={e => selectCapacity(e)}>
                            3
                        </button>
                        <button value={4} className={`${styles.capacity__item} ${styles.inactive}`} onClick={e => selectCapacity(e)}>
                            4
                        </button>
                        <button value={5} className={`${styles.capacity__item} ${styles.inactive}`} onClick={e => selectCapacity(e)}>
                            5
                        </button>
                        <button value={6} className={`${styles.capacity__item} ${styles.inactive}`} onClick={e => selectCapacity(e)}>
                            6
                        </button>
                        <button value={7} className={`${styles.capacity__item} ${styles.inactive}`} onClick={e => selectCapacity(e)}>
                            7
                        </button>
                        <button value={8} className={`${styles.capacity__item} ${styles.inactive}`} onClick={e => selectCapacity(e)}>
                            8+
                        </button>
                    </div>
                </section>
                <section className={styles.placeTypeWrapper}>
                    <h2>Place type</h2>
                    <div className={styles.placeTypeWrapper__content}>
                        {
                            placeTypes.map(pt => (
                                <CheckboxLabel className={styles.placeTypeWrapper__item} onChange={e => selectPlaceType(e)} key={pt._id} id={pt._id} label={pt.title} defaultChecked={false}></CheckboxLabel>
                            ))
                        }
                    </div>
                </section>
            </FilterModal>
        </div>
    );
};

export default Index;