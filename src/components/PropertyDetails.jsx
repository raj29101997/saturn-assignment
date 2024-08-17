
import React, { useEffect, useState } from 'react'
import BookIcon from '../assets/svg/BookIcon'
import GoogleMap from './GoogleMap'
import axios from 'axios'
import imageOne from '../assets/svg/Mask group.png'
import imageTwo from '../assets/svg/Mask group (1).png'
import imageThree from '../assets/svg/Mask group (2).png'
import imageFour from '../assets/svg/Group 1000002089.png'

const dummyImgList = [
    {
        img:imageOne,
        name: "property1",
    },
    {
        img:imageTwo,
        name: "property2",
    },
    {
        img:imageThree,
        name: "property3",
    },
    {
        img:imageFour,
        name: "property4",
    },
]

const PropertyDetails = () => {

    const [propertyData, setPropertyData] = useState({})
    const [previewImage, setPreviewImage] = useState({})
    const [images, setImages] = useState([])

    function handlePreviewImage(item) {
        setPreviewImage(item)
    }
    useEffect(() => {
        axios.get('http://localhost:4001/getData').then((results)=>{
            setPropertyData(results.data[0])
            setImages(dummyImgList)
        })
        setPreviewImage(dummyImgList[0])
    }, [])

    return (
        <div className='property-detail-container'>
            <div className="image-container">
                <div className="preview-image">
                    {
                        previewImage?.img && <img src={previewImage?.img} alt={previewImage.name} />
                    }
                </div>
                <div className="img-list">
                    {
                        images?.map(item => {

                            return (
                                <div className={"img-wrapper " + (item.name === previewImage?.name ? "activeImg" : "")} onClick={() => handlePreviewImage(item)} key={item.name} >
                                    <img className='slide-img' src={item.img} alt={item.name} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="detail-container">
                <div className="detail-header">
                    <div className="title">
                        {propertyData.houseName}
                    </div>
                    <div className="description">
                        {propertyData.description}
                    </div>
                </div>
                <div className="detail-body">
                    <div className="property-info-container">
                        <div className="property-info">
                            <div className='bold-details'>
                                <div className='detail-box'>
                                    <div className='box-header text-gold'>
                                        {propertyData.price}
                                    </div>
                                    <div className="box-subheader">
                                        {propertyData.pricePerSqFt}
                                    </div>
                                </div>
                                <div className='detail-box'>
                                    <div className='box-header text-gold'>
                                        Plot Size
                                    </div>
                                    <div className="box-subheader">
                                        {propertyData.plotSize}
                                    </div>
                                </div>
                                <div className='detail-box'>
                                    <div className='box-header text-gold'>
                                        Area
                                    </div>
                                    <div className="box-subheader">
                                        {propertyData.area}
                                    </div>
                                </div>
                            </div>
                            <div className='small-details'>
                                <div className='detail-box'>
                                    <div className='box-header'>
                                        Total Units
                                    </div>
                                    <div className="box-subheader">
                                        {propertyData.totalUnits}
                                    </div>
                                </div>
                                <div className='detail-box'>
                                    <div className='box-header'>
                                        Project type
                                    </div>
                                    <div className="box-subheader">
                                        {propertyData.projectType}
                                    </div>
                                </div>
                                <div className='detail-box'>
                                    <div className='box-header'>
                                        Status
                                    </div>
                                    <div className="box-subheader">
                                        {propertyData.status}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ameneties">
                            <div className="title">
                                {propertyData?.amenitiesQuantity}
                            </div>
                            <div className="ameneties-list">
                                {
                                    propertyData?.amenities?.map(item => {
                                        return (
                                            <div className='ameneties-item'>
                                                <div className='icon'>
                                                    <BookIcon />
                                                </div>
                                                <div className='ameneties-header'>
                                                    {item}
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="map-container">
                        <GoogleMap />
                    </div>
                </div>
                <div className="action-container">
                    <div>
                        <button className='btn-alternate'>Chat Now</button>
                        <button className='btn-alternate'>Call Now</button>
                    </div>
                    <div>
                        <button className='btn-normal'>Schedule Site Visit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyDetails