import React, { useState } from 'react';
import axios from 'axios';
import './desiese.css';



const plantDiseasesData = {
  "Apple___Apple_scab": {
    "Diseases":"Apple Scab",
    "deficiency": "Caused by the fungus Venturia inaequalis",
    
    "organic_measure": "Remove fallen leaves and prune affected areas. Use neem oil or sulfur-based fungicides.",
    "inorganic_measure": "Apply fungicides containing myclobutanil or captan.",
    "image_link": "https://cdn.britannica.com/61/185161-050-726ED959/spots-Orange-cedar-apple-rust-disease-apple-leaf.jpg"
  },
  "Apple___Black_rot": {
    "Diseases":"Apple Blackrot",
    "deficiency": "Caused by the fungus Botryosphaeria obtusa",
    
    "organic_measure": "Remove and destroy infected plant debris. Apply copper-based fungicides.",
    "inorganic_measure": "Use fungicides with thiophanate-methyl or captan.",
    "image_link": "https://farm3.static.flickr.com/2777/5706666883_727b1858e7.jpg"
  },
  "Apple___Cedar_apple_rust": {
    "Diseases":"Apple Rust",
    "deficiency": "Caused by the fungus Gymnosporangium juniperi-virginianae",
    
    "organic_measure": "Remove nearby juniper hosts. Use sulfur or copper sprays.",
    "inorganic_measure": "Apply fungicides containing myclobutanil or propiconazole.",
    "image_link": "https://mdc.mo.gov/sites/default/files/styles/gallery_main_image/public/2021-05/Cedar-Apple_Rust_Apple_Leaf_Spots_3-23-21.jpg?itok=GOC0Z1OL"
  },
  "Apple___healthy": {
    "Diseases":"Apple Healthy",
    "deficiency": "None",
    
    "organic_measure": "Maintain proper care and monitoring.",
    "inorganic_measure": "Regular balanced fertilization and appropriate pesticide use.",
    "image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKHwH5bfXEdprKuxvoiUKSPr6SdN_WZ8M3gw&s"
  },
  "Blueberry___healthy": {
    "Diseases":"Blueberry Healthy",
    "deficiency": "None",
    
    "organic_measure": "Ensure good cultural practices and monitoring.",
    "inorganic_measure": "Regular balanced fertilization and appropriate pesticide use.",
    "image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStQKdUpdClthNgdhmHOTOcg_0fWTJYBPnhsw&s"
  },
  "Cherry_(including_sour)___Powdery_mildew": {
    "Diseases":"Cherry Powedery",
    "deficiency": "Caused by the fungus Podosphaera clandestina",
    
    "organic_measure": "Prune infected areas and use neem oil or potassium bicarbonate.",
    "inorganic_measure": "Apply fungicides like myclobutanil or sulfur.",
    "image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREErf9nAU9n27ycDjZOVCQCbAkxIviLGLc5g&s"
  },
  "Cherry_(including_sour)___healthy": {
    "Diseases":"Cherry Healthy",
    "deficiency": "None",
   
    "organic_measure": "Ensure good cultural practices and monitoring.",
    "inorganic_measure": "Regular balanced fertilization and appropriate pesticide use.",
    "image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb55mD3YhEm9LbBkyscIXYYxms09x0-kzs0w&s"
  },
  "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot": {
    "Diseases":"Corn Grayleafspot",
    "deficiency": "Caused by the fungus Cercospora zeae-maydis",
    
    "organic_measure": "Rotate crops and remove plant debris. Apply compost tea or neem oil.",
    "inorganic_measure": "Use fungicides containing strobilurins or triazoles.",
    "image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHI10MbkwEpAQYh7nC9xk1GAZjLFg_twf4Pg&s"
  },
  "Corn_(maize)___Common_rust_": {
    "Diseases":"Corn Rust",
    "deficiency": "Caused by the fungus Puccinia sorghi",
    
    "organic_measure": "Plant resistant varieties and ensure good air circulation. Use sulfur sprays.",
    "inorganic_measure": "Apply fungicides with chlorothalonil or mancozeb.",
    "image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYkjmhmODjdmkVFoJrzJevwugu3L-2k6j32w&s"
  },
  "Corn_(maize)___Northern_Leaf_Blight": {
    "Diseases":"Corn Northern Leaf Blight",
    "deficiency": "Caused by the fungus Exserohilum turcicum",
    
    "organic_measure": "Rotate crops and remove plant debris. Apply neem oil or compost tea.",
    "inorganic_measure": "Use fungicides like azoxystrobin or propiconazole.",
    "image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI0SkoMoSKWA_Hl8AH49Pwx9PufnCIeyNAzA&s"
  },
  "Corn_(maize)___healthy": {
    "Diseases":"Corn Healthy",
    "deficiency": "None",
 
    "organic_measure": "Maintain proper care and monitoring.",
    "inorganic_measure": "Regular balanced fertilization and appropriate pesticide use.",
    "image_link": "https://www.stockvault.net/data/2018/12/23/258150/preview16.jpg"
  },
  "Grape___Black_rot": {
    "Diseases":"Grape Blackroot",
    "deficiency": "Caused by the fungus Guignardia bidwellii",
   
    "organic_measure": "Prune and destroy infected vines. Use copper-based fungicides.",
    "inorganic_measure": "Apply fungicides with myclobutanil or mancozeb.",
    "image_link": "https://media.sciencephoto.com/c0/12/10/47/c0121047-800px-wm.jpg"
  },
  "Grape___Esca_(Black_Measles)": {
    "Diseases":"Black Measles",
    "deficiency": "Caused by a complex of fungi including Phaeoacremonium aleophilum",
   
    "organic_measure": "Remove infected wood and ensure good vineyard sanitation. Use biological control agents.",
    "inorganic_measure": "Apply fungicides containing tebuconazole or thiophanate-methyl.",
    "image_link": "https://upload.wikimedia.org/wikipedia/commons/c/cb/ESCA_Blattsymptom_1.JPG"
  },
  "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)": {
    "Diseases":"Grape LeafBlight",
    "deficiency": "Caused by the fungus Pseudocercospora vitis",
    
    "organic_measure": "Remove and destroy infected leaves. Use neem oil or copper sprays.",
    "inorganic_measure": "Apply fungicides with chlorothalonil or mancozeb.",
    "image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEoyjyfsTQIGO0rnBXUnfbym1w4KiBU3kfSQ&s"
  },
  "Grape___healthy": {
    "Diseases":"Grape Healthy",
    "deficiency": "None",
    "organic_measure": "Maintain proper care and monitoring.",
    "inorganic_measure": "Regular balanced fertilization and appropriate pesticide use.",
    "image_link": "https://i0.wp.com/amberkanuckel.com/wp-content/uploads/2015/02/wild-grape-leaf.jpg?ssl=1"
  },
  "Orange___Haunglongbing_(Citrus_greening)": {
    "Diseases":"Citrus Greening",
    "deficiency": "Caused by the bacterium Candidatus Liberibacter asiaticus",
    
    "organic_measure": "Remove and destroy infected trees. Use organic insecticides to control the Asian citrus psyllid.",
    "inorganic_measure": "Apply systemic insecticides like imidacloprid.",
    "image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7B01VRCyASy_h5GnOgA3j0vXOy1tWpnMNug&s"
  },
  "Peach___Bacterial_spot": {
    "Diseases":"Peach Bacterialspot",
    "deficiency": "Caused by the bacterium Xanthomonas campestris pv. pruni",
    
    "organic_measure": "Remove infected plant parts and apply copper-based bactericides.",
    "inorganic_measure": "Use antibiotics like streptomycin or oxytetracycline.",
    "image_link": "https://www.canr.msu.edu/ipm/uploads/images/Fruit/leavesBacterialspot.jpg"
  },
  "Peach___healthy": {
    "Diseases":"Peach Healthy",
    "deficiency": "None",

    "organic_measure": "Maintain proper care and monitoring.",
    "inorganic_measure": "Regular balanced fertilization and appropriate pesticide use.",
    "image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcrAEbsCyuE1F_-yavAGUKz-bE-EdHPN9NVQ&s"
  },
  "Pepper,_bell___Bacterial_spot": {
    "Diseases":"Pepper BellbacterialSpot",
    "deficiency": "Caused by the bacterium Xanthomonas campestris pv. vesicatoria",

    "organic_measure": "Remove and destroy infected plants. Use copper-based bactericides.",
    "inorganic_measure": "Apply antibiotics like streptomycin or copper hydroxide.",
    "image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB73znDvyq3LarGBpPPuPATxIuQJU4FTqRaA&s"
  },
  "Pepper,_bell___healthy": {
    "Diseases":"Pepper Healthy",
    "deficiency": "None",

    "organic_measure": "Maintain proper care and monitoring.",
    "inorganic_measure": "Regular balanced fertilization and appropriate pesticide use.",
    "image_link": "https://www.gardentech.com/-/media/project/oneweb/gardentech/images/blog/growing-your-own-bell-peppers/growing_peppers-pepper_leaves.jpg"
  },
  "Potato___Early_blight": {
    "Diseases":"Early Blight",
    "deficiency": "Caused by the fungus Alternaria solani",
  
    "organic_measure": "Remove and destroy infected leaves. Use neem oil or copper sprays.",
    "inorganic_measure": "Apply fungicides with chlorothalonil or mancozeb.",
    "image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-0n21wzCJqOA7HpjDNHRlRMQz2PSe5p2Zow&s"
  },
  "Potato___Late_blight": {
    "Diseases":"Late Blight",
    "deficiency": "Caused by the oomycete Phytophthora infestans",
    "organic_measure": "Use of copper-based fungicides, crop rotation, resistant varieties, and proper sanitation",
    "inorganic_measure": "Application of chemical fungicides such as mancozeb or chlorothalonil",
    "image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ehyz0Y5B2PYu1_nVB7XUFMkRYgQYb9Lu7g&s"
  },
  "Potato___healthy": {
    "Diseases":"Potato healthy",
    "deficiency": "None",
    "organic_measure": "Maintain healthy soil, proper irrigation, and use of disease-free seed potatoes",
    "inorganic_measure": "N/A",
    "image_link": "https://www.garden.eco/wp-content/uploads/2018/01/potato-leaves.jpg"
  },
  "Raspberry___healthy": {
    "Diseases":"Raspberry Healthy",
    "deficiency": "None",
    "organic_measure": "Proper pruning, use of mulch, and maintaining good air circulation",
    "inorganic_measure": "N/A",
    "image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNajJxkmgCL72tIcMn_PVn6txnAlPu7-dBEQ&s"
  },
  "Soybean___healthy": {
    "Diseases":"Soybean Healthy",
    "deficiency": "None",
    "organic_measure": "Crop rotation, use of cover crops, and maintaining soil health",
    "inorganic_measure": "N/A",
    "image_link": "https://agriculture.basf.us/content/dam/cxm/agriculture/crop-protection/news-and-events/images/CRP201800021_Hero_Crop_Imgs_FSR_Soy.jpg"
  },
   
  "Squesh_powdery_mildew": {
    "Diseases":"Squesh Powdery",
    "deficiency": "Powdery mildew is a fungal disease that affects the leaves of squash plants, causing white, powdery spots.",
    "organic_measure": "Use neem oil or a mixture of baking soda and water as a spray. Ensure good air circulation and remove infected leaves.",
    "inorganic_measure": "Apply fungicides containing sulfur or potassium bicarbonate.",
    "image_link": "https://www.bhg.com/thmb/YjjUzqC9ih6_d2S2ohFWra6urY8=/1870x0/filters:no_upscale():strip_icc()/treating-powdery-mildew-plant-ac36e077ba4a4f6184824bd68483489c.jpg"
},
"Strawbarry_healthy": {
    "Diseases":"Strawbarry Healthy",
    "deficiency": "Healthy strawberry plants show no signs of disease, pests, or nutrient deficiencies.",
    "organic_measure": "Ensure proper watering, use compost for nutrients, and practice crop rotation.",
    "inorganic_measure": "Use balanced fertilizers with an NPK ratio suitable for strawberries.",
    "image_link": "https://www.shutterstock.com/image-photo/green-healthy-leaves-strawberries-strawberry-600w-1470913157.jpg"
},
"Strawbarry_Leaf_scorch": {
    "Diseases":"Strawbarry LeafScorch",
    "deficiency": "Leaf scorch in strawberries is often caused by fungal infections or adverse environmental conditions.",
    "organic_measure": "Improve watering practices, provide mulch to retain soil moisture, and remove affected leaves.",
    "inorganic_measure": "Apply fungicides containing copper or myclobutanil.",
    "image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ12lqCcfh9PiOTm_wFUWdMgiuaGjHfdyQRkA&s"
},
"Tomato_Bacterial_spot": {
    "Diseases":"tomato BacterialSpot",
    "deficiency": "Bacterial spot causes dark, water-soaked lesions on tomato leaves, stems, and fruits.",
    "organic_measure": "Use copper-based bactericides and remove infected plant debris. Rotate crops and ensure proper spacing.",
    "inorganic_measure": "Apply streptomycin or fixed copper sprays.",
    "image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrPZI3s9v0v1HoESs_CkJVWaaJ2M4I5B7Euw&s"
},
"Tomato_Early_blight": {
    "Diseases":"Tomato EarlyBlight",
    "deficiency": "Early blight causes concentric rings on tomato leaves, leading to defoliation and reduced yield.",
    "organic_measure": "Apply neem oil or compost tea. Use resistant varieties and practice crop rotation.",
    "inorganic_measure": "Use fungicides containing chlorothalonil or mancozeb.",
    "image_link": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fextension.umd.edu%2Fresource%2Fearly-blight-tomatoes&psig=AOvVaw2LTGw6wcX9-6ncDN_-bQR0&ust=1717762313662000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNiZ8Lb5xoYDFQAAAAAdAAAAABAE"
},
"Tomato_Late_blight": {
    "Diseases":"Tomato LateBlight",
    "deficiency": "Late blight results in large, water-soaked lesions on leaves and fruit, rapidly destroying tomato plants.",
    "organic_measure": "Use copper-based fungicides and remove affected plants. Ensure proper spacing and air circulation.",
    "inorganic_measure": "Apply fungicides containing mefenoxam or chlorothalonil.",
    "image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4v6cphIGp4FfzBauNyHJYMq1V-Fb-tAB6WQ&s"
},
"Tomato_Leaf_Mold": {
    "Diseases":"Tomato LeafMold",
    "deficiency": "Leaf mold causes yellow spots on tomato leaves, which later develop into a grayish mold.",
    "organic_measure": "Increase air circulation, reduce humidity, and apply neem oil.",
    "inorganic_measure": "Use fungicides containing chlorothalonil or mancozeb.",
    "image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShtAQlNhpGebJgNH01lB3UiKFPCdOr9Db5fw&s"
},
"Tomato_Septoria_leaf_spot": {
    "Diseases":"Tomato SeptoriaLeafSpot",
    "deficiency": "Septoria leaf spot causes small, circular spots with dark borders on tomato leaves.",
    "organic_measure": "Remove affected leaves, apply neem oil, and ensure crop rotation.",
    "inorganic_measure": "Use fungicides containing chlorothalonil or copper-based products.",
    "image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlGFWgKDzqj-HJvt7WvJbDDU-1w2a4cveF9g&s"
},

  "Tomato___Spider_mites Two-spotted_spider_mite": {
    "Diseases":"Tomato Spidermites",
    "deficiency": "Caused by Tetranychus urticae infestations",
    "organic_measure": "Use of neem oil, insecticidal soaps, and encouraging natural predators like ladybugs",
    "inorganic_measure": "Application of miticides such as abamectin or bifenazate",
    "image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY3jYZW3TucNO1CYqLuGq94lrj-O5UvpiGzA&s"
  },
  "Tomato___Target_Spot": {
    "Diseases":"Tomato TargetSpot",
    "deficiency": "Caused by the fungus Corynespora cassiicola",
    "organic_measure": "Use of copper-based fungicides, crop rotation, and resistant varieties",
    "inorganic_measure": "Application of fungicides such as chlorothalonil or mancozeb",
    "image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3lWIP1fcDrd-ei2sWwgK99WMqISjPB4sjWg&s"
  },
  "Tomato___Tomato_Yellow_Leaf_Curl_Virus": {
    "Diseases":"Tomato YellowLeafCurlVirus",
    "deficiency": "Caused by the Tomato yellow leaf curl virus (TYLCV)",
    "organic_measure": "Use of reflective mulches, resistant varieties, and controlling whitefly populations",
    "inorganic_measure": "Application of insecticides to control whiteflies, such as imidacloprid",
    "image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbxGR_KBj-yUNcfJNOuEzXMddgmPY66I-w-Q&s"
  },
  "Tomato___Tomato_mosaic_virus": {
    "Diseases":"Tomato Mosaic",
    "deficiency": "Caused by the Tomato mosaic virus (ToMV)",
    "organic_measure": "Use of resistant varieties, proper sanitation, and crop rotation",
    "inorganic_measure": "N/A as there are no chemical treatments for viruses",
    "image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR6vJcDrCsHRDtYthl6XMbnD0AlqQ3NpwyxA&s"
  },
  "Tomato___healthy": {
    "Diseases":"Tomato Healthy",
    "deficiency": "None",
    "organic_measure": "Proper soil management, adequate watering, and use of disease-free seeds",
    "inorganic_measure": "N/A",
    "image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxkBcpx0p9a-JXTXzcpK0NvAdu79oRPPa4Vg&s"
  }
};



const Desies = () =>  {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);


  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

 
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('https://achinup.github.io/Plant38/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setPrediction(response.data.prediction);
      setError(null);
    } catch (err) {
      setError(err.response ? err.response.data.error : "Unknown error occurred");
      setPrediction(null);
    }
  };

  return (
    <div className="App container">
     <div className="text-center mb-4">
                <h1 className="mb-3">Disease Prediction</h1>
                <form className="p-4 border rounded bg-success " onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="file" onChange={handleFileChange} className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-warning">Predict</button>
                </form>
            </div>
    {prediction && (
       <div className="d-flex justify-content-center mt-4" style={{ backgroundColor: " rgb(107, 128, 0)",color: "white" ,borderRadius:"10px"}}>
    <div className="card-body" style={{ maxWidth: '540px' }}>
        <div className="row g-0">
            <div className="col-md-4">
                <img
                    src={plantDiseasesData[prediction].image_link}
                    className="img-fluid rounded-start custom-img"
                    alt={plantDiseasesData[prediction].Diseases}
                />
            </div>
            <div className="col-md-8" style={{padding:"15px"}}>
                <div className="card-body">
                    <h2 className="card-title">{plantDiseasesData[prediction].Diseases}</h2>
                    <br></br>
                    <p className="card-text"><b>Deficiency: </b>{plantDiseasesData[prediction].deficiency}</p>
                    <p className="card-text"><b>Organic Measure: </b>{plantDiseasesData[prediction].organic_measure}</p>
                    <p className="card-text"><b>Inorganic Measure: </b>{plantDiseasesData[prediction].inorganic_measure}</p>
                </div>
            </div>
        </div>
    </div>
</div>

    )}
    {error && <div className="text-center mt-4"><h2>Error: {error}</h2></div>}
</div>
  );
}

export default Desies;









