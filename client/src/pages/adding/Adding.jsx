import React, {useState} from 'react';
import './Adding.scss';

import {gigsCategoryCA} from '../../data/dummyDataCA';
import {gigsCategoryDE} from '../../data/dummyDataDE';
import {gigsCategoryEN} from '../../data/dummyDataEN';
import {gigsCategoryES} from '../../data/dummyDataES';

import i18n from '../../i18n';

function Adding() {

    let gigsCategory;

    if (i18n.language === "ca") {
        gigsCategory = gigsCategoryCA;
    } else if(i18n.language === "de") {
        gigsCategory = gigsCategoryDE;
    } else if(i18n.language === "en") {
        gigsCategory = gigsCategoryEN;
    }else if(i18n.language === "es") {
        gigsCategory = gigsCategoryES;
    }

    const [isActiveInput, setIsActiveInput] = useState(false);
    const [isActiveSelect, setIsActiveSelect] = useState(false);

    return (
        <div className='addingContainer'>
            <div className="addingWrapper">
                <h1>Agregar Nuevo Servicio</h1>
                <div className="addingSections">
                    <form action="">
                        <div className="left">
                            <div className="form-group">
                                <label className='form-label' htmlFor="gigTitle">Título:</label>
                                <input type="text" className="form-control-input" id="gigTitle" placeholder="Título del servicio..." />
                            </div>
                            <div className="form-group">
                                <label className='form-label' htmlFor="gigCategory">Categoría:</label>
                                <select name="gigCategory" className={isActiveSelect ? "form-control-select select-border" : "form-control-select"} id="gigCategory" onClick={() => setIsActiveSelect(!isActiveSelect)}>
                                    <option value="">-- Seleccione una categoría --</option>
                                    {gigsCategory.map((category) => (<option key={category.id} value={category.cat}>{category.title}</option>))}
                                </select>
                            </div>
                            <div className="form-group">
                                <label className='form-label' htmlFor="gigCoverImage">Imagen de portada:</label>
                                <input type="file" className={isActiveInput ? "form-control-input-file file-border" : "form-control-input-file"} id="gigCoverImage" onClick={() => setIsActiveInput(!isActiveInput)} />
                            </div>
                            <div className="form-group">
                                <label className='form-label' htmlFor="gigUploadImages">Imágenes subidas:</label>
                                <input type="file" className={isActiveInput ? "form-control-input-file file-border" : "form-control-input-file"} id="gigUploadImages" multiple onClick={() => setIsActiveInput(!isActiveInput)} />
                            </div>
                            <div className="form-group">
                                <label className='form-label' htmlFor="gigDescription">Descripción:</label>
                                <textarea name="gigDescription" id="gigDescription" className="form-control-textarea" cols="30" rows="16" placeholder='Breve dexripción del servicio ofrecido...'></textarea>
                            </div>
                            <div className="form-group">
                                <button type="button" className="form-control-button">Crear</button>
                            </div>
                        </div>
                        <div className="right">
                            <div className="form-group">
                                <label className='form-label' htmlFor="serviceTitle">Título breve:</label>
                                <input type="text" className="form-control-input" id="serviceTitle" aria-describedby="serviceTitle" placeholder="Título del servicio..." />
                            </div>
                            <div className="form-group">
                                <label className='form-label' htmlFor="gigShortDescription">Descripción breve:</label>
                                <textarea name="gigShortDescription" id="gigShortDescription" className="form-control-textarea" cols="30" rows="16" placeholder='Breve descripción del servicio ofrecido...'></textarea>
                            </div>
                            <div className="form-group-delivery-revision">
                                <div className="delivery-revision">
                                    <label className='form-label' htmlFor="deliveryTime">Tiempo de entrega <span className='delivery-time'>(ej: 3 días)</span>:</label>
                                    <input type="number" className="form-control-input" id="deliveryTime" aria-describedby="deliveryTime" min={1} placeholder="1" />
                                </div>
                                <div className="delivery-revision">
                                    <label className='form-label' htmlFor="revisionNumber">Número de revisión:</label>
                                    <input type="number" className="form-control-input" id="revisionNumber" aria-describedby="revisionNumber" min={1} placeholder="1" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className='form-label' htmlFor="serviceSkills">Agregar habilidades:</label>
                                <div className="form-group-skills">
                                    <input type="text" className="form-control-input" name='serviceSkills' id="serviceSkills1" aria-describedby="serviceSkills" placeholder="ej: Diseño web..." />
                                    <input type="text" className="form-control-input" name='serviceSkills' id="serviceSkills2" aria-describedby="serviceSkills" placeholder="ej: Adobe Photoshop..." />
                                    <input type="text" className="form-control-input" name='serviceSkills' id="serviceSkills3" aria-describedby="serviceSkills" placeholder="ej: Arte de personajes..." />
                                    <input type="text" className="form-control-input" name='serviceSkills' id="serviceSkills4" aria-describedby="serviceSkills" placeholder="ej: Diseño gráfico..." />
                                    <input type="text" className="form-control-input" name='serviceSkills' id="serviceSkills5" aria-describedby="serviceSkills" placeholder="ej: Ilustración gráfica..." />
                                    <input type="text" className="form-control-input" name='serviceSkills' id="serviceSkills6" aria-describedby="serviceSkills" placeholder="ej: Arte de IA..." />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className='form-label' htmlFor="priceService">Precio:</label>
                                <input type="number" className="form-control-input" id="priceService" aria-describedby="priceService" min={2} placeholder="10,00" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Adding;