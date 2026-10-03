const plantVillageImage = (classFolder, filename) =>
  `https://raw.githubusercontent.com/spMohanty/PlantVillage-Dataset/master/raw/color/${encodeURIComponent(classFolder)}/${encodeURIComponent(filename)}`

const plantVillageCredit = {
  source: 'PlantVillage Dataset',
  sourceUrl: 'https://huggingface.co/datasets/mohanty/PlantVillage',
  license: 'CC BY-SA 3.0',
  licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/'
}

const existingDiseases = [
  {
    id: 'early-blight',
    name: 'Tomato Early Blight',
    crop: 'Tomato',
    type: 'Fungal',
    plantPart: 'Leaf',
    severity: 'Moderate',
    image: plantVillageImage('Tomato___Early_blight', '0012b9d2-2130-4a06-a834-b1f3af34f57e___RS_Erly.B 8389.JPG'),
    summary: 'Dark concentric leaf spots often begin on older leaves and spread quickly in warm wet conditions.',
    symptoms: ['Brown or black leaf spots with target-like rings', 'Yellowing around infected tissue', 'Leaf drop under repeated stress'],
    causes: ['High humidity', 'Poor air circulation', 'Leaf wetness from overhead watering'],
    treatment: 'Remove infected leaves, improve spacing, and use registered crop protection products according to label guidance.',
    prevention: ['Water at the base of the plant', 'Prune lower foliage for better airflow', 'Rotate crops and maintain field sanitation'],
    managementTips: ['Use resistant varieties where available', 'Scout weekly during humid periods', 'Avoid overcrowding']
  },
  {
    id: 'late-blight',
    name: 'Potato Late Blight',
    crop: 'Potato',
    type: 'Fungal',
    plantPart: 'Leaf',
    severity: 'High',
    image: plantVillageImage('Potato___Late_blight', '0051e5e8-d1c4-4a84-bf3a-a426cdad6285___RS_LB 4640.JPG'),
    summary: 'Rapidly spreading disease that can devastate foliage and tubers in cool wet weather.',
    symptoms: ['Water-soaked dark lesions', 'White fungal growth under humid conditions', 'Sudden wilting and collapse'],
    causes: ['Cool damp weather', 'Dense canopies', 'Infected seed or volunteer plants'],
    treatment: 'Act quickly to reduce spread and consult local extension guidance for approved management practices.',
    prevention: ['Avoid infected planting material', 'Improve drainage and airflow', 'Remove volunteer plants'],
    managementTips: ['Schedule irrigation carefully', 'Use resistant varieties', 'Inspect fields often']
  },
  {
    id: 'rice-blast',
    name: 'Rice Blast',
    crop: 'Rice',
    type: 'Fungal',
    plantPart: 'Leaf',
    severity: 'High',
    image:
      'https://images.unsplash.com/photo-1563553300970-b1b56e1d49d9?auto=format&fit=crop&w=900&q=80',
    summary: 'One of the most common rice diseases, severely affecting leaf and neck tissues.',
    symptoms: ['Elliptical leaf lesions with dark margins', 'Spindle-shaped lesions', 'Panicle neck breakage'],
    causes: ['High humidity', 'Nitrogen excess', 'Stress during growth'],
    treatment: 'Balance nutrient management and apply appropriate crop protection only when needed and recommended.',
    prevention: ['Use resistant cultivars', 'Avoid excessive nitrogen', 'Keep fields clean and leveled'],
    managementTips: ['Monitor seedling stages', 'Keep water managed carefully', 'Rotate varieties if needed']
  },
  {
    id: 'rust',
    name: 'Rust',
    crop: 'Wheat',
    type: 'Fungal',
    plantPart: 'Leaf',
    severity: 'Moderate',
    image:
      'https://images.unsplash.com/photo-1464226184884-fa52ac9fc4b6?auto=format&fit=crop&w=900&q=80',
    summary: 'Fungal infection causing orange or reddish pustules on leaves and stems.',
    symptoms: ['Rust-colored powder on leaves', 'Yellowing and reduced vigor', 'Lower grain fill'],
    causes: ['Moisture and cool temperatures', 'Dense stand', 'Susceptible varieties'],
    treatment: 'Use resistant varieties and follow local agronomic advice before pesticide applications.',
    prevention: ['Avoid excess nitrogen', 'Choose resistant cultivars', 'Remove volunteer wheat'],
    managementTips: ['Scout before weather events', 'Improve canopy airflow', 'Monitor spread early']
  },
  {
    id: 'anthracnose',
    name: 'Anthracnose',
    crop: 'Chilli',
    type: 'Fungal',
    plantPart: 'Fruit',
    severity: 'Moderate',
    image:
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=900&q=80',
    summary: 'Fruit and leaf spotting disease common during warm wet periods.',
    symptoms: ['Sunken lesions on fruit', 'Dark bruising with ring patterns', 'Leaf drop and fruit rot'],
    causes: ['Leaf wetness', 'Warm temperatures', 'Infected crop residue'],
    treatment: 'Remove infected fruit and leaves, improve airflow, and follow local regulations for approved treatments.',
    prevention: ['Avoid overhead irrigation', 'Use clean seed', 'Remove crop debris'],
    managementTips: ['Monitor fruit clusters', 'Inspect after rain events', 'Keep field sanitation strong']
  },
  {
    id: 'verticillium-wilt',
    name: 'Verticillium Wilt',
    crop: 'Cotton',
    type: 'Fungal',
    plantPart: 'Stem',
    severity: 'High',
    image:
      'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=900&q=80',
    summary: 'Wilt disease causing yellowing and internal vascular discoloration.',
    symptoms: ['Leaf yellowing one side of the plant', 'Wilting during warm periods', 'Stunted plant growth'],
    causes: ['Soil-borne fungus', 'Stress conditions', 'Continuous cotton cropping'],
    treatment: 'Manage irrigation and field stress; avoid replanting susceptible crops in infested soil without rotation.',
    prevention: ['Use healthy seed', 'Rotate fields', 'Maintain balanced nutrition'],
    managementTips: ['Avoid water stress', 'Monitor root health', 'Remove diseased plants']
  },
  {
    id: 'soybean-rust',
    name: 'Soybean Rust',
    crop: 'Soybean',
    type: 'Fungal',
    plantPart: 'Leaf',
    severity: 'High',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
    summary: 'Leaf fungal disease that reduces photosynthesis and pod fill in warm humid fields.',
    symptoms: ['Small tan or brown lesions', 'Leaf chlorosis', 'Premature defoliation'],
    causes: ['High humidity', 'Warm conditions', 'Infected host plants'],
    treatment: 'Use good field monitoring and integrated disease management with locally approved interventions.',
    prevention: ['Improve spacing', 'Use resistant cultivars', 'Avoid unnecessary late irrigation'],
    managementTips: ['Scout before heading', 'Inspect lower foliage', 'Keep records of outbreaks']
  },
  {
    id: 'leaf-blight',
    name: 'Leaf Blight',
    crop: 'Maize',
    type: 'Fungal',
    plantPart: 'Leaf',
    severity: 'Moderate',
    image:
      'https://images.unsplash.com/photo-1464226184884-fa52ac9fc4b6?auto=format&fit=crop&w=900&q=80',
    summary: 'Leaf spotting disease that builds through rainy periods and weakens the plant canopy.',
    symptoms: ['Long, narrow lesions on leaves', 'Chlorotic margins', 'Reduced photosynthetic area'],
    causes: ['Humid conditions', 'Residue left on field', 'Susceptible hybrids'],
    treatment: 'Widely recommended management combines resistant hybrids, clean residue handling, and advisable fungicidal use only when justified.',
    prevention: ['Use tolerant hybrids', 'Rotate crops', 'Incorporate residues carefully'],
    managementTips: ['Monitor after rain', 'Avoid lodging risk', 'Balance fertility']
  },
  {
    id: 'mango-anthracnose',
    name: 'Mango Anthracnose',
    crop: 'Mango',
    type: 'Fungal',
    plantPart: 'Fruit',
    severity: 'High',
    image:
      'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=900&q=80',
    summary: 'Fruit and blossom disease causing dark lesions and fruit rot in humid weather.',
    symptoms: ['Black irregular fruit spots', 'Blossom blight', 'Post-harvest decay'],
    causes: ['Humidity', 'Rain splash', 'Infected blossoms'],
    treatment: 'Prune and manage canopy moisture; use approved control measures when disease pressure is high.',
    prevention: ['Sanitize pruning tools', 'Reduce dense foliage', 'Avoid irrigation over the canopy'],
    managementTips: ['Monitor flowering flushes', 'Inspect fruit early', 'Harvest promptly']
  },
  {
    id: 'downy-mildew',
    name: 'Downy Mildew',
    crop: 'Grapes',
    type: 'Fungal',
    plantPart: 'Leaf',
    severity: 'Moderate',
    image:
      'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=900&q=80',
    summary: 'Leaf and cluster disease favored by cool, wet conditions and dense canopies.',
    symptoms: ['Yellow patches on upper leaf surfaces', 'Downy growth beneath leaves', 'Berry distortion'],
    causes: ['Moisture', 'Cool nights', 'Dense vine canopy'],
    treatment: 'Improve canopy ventilation and use field-appropriate disease management based on local recommendations.',
    prevention: ['Remove infected tissue', 'Avoid overhead irrigation', 'Plant resilient varieties'],
    managementTips: ['Monitor after rain', 'Prune for airflow', 'Check cluster health']
  },
  {
    id: 'bacterial-spot',
    name: 'Tomato Bacterial Spot',
    crop: 'Tomato',
    type: 'Bacterial',
    plantPart: 'Leaf',
    severity: 'Moderate',
    image: plantVillageImage('Tomato___Bacterial_spot', '00416648-be6e-4bd4-bc8d-82f43f8a7240___GCREC_Bact.Sp 3110.JPG'),
    summary: 'Bacterial leaf and fruit spotting often spreads through splash and contaminated tools.',
    symptoms: ['Small dark lesions', 'Fruit blemishes', 'Leaf curl or yellowing'],
    causes: ['Rain splash', 'Wounds', 'Contaminated equipment'],
    treatment: 'Keep foliage dry, sanitize tools, and use appropriate sanitation and crop protection based on local guidance.',
    prevention: ['Water at the base', 'Rotate crops', 'Avoid working plants when wet'],
    managementTips: ['Discard severely infected plants', 'Inspect weekly', 'Keep records of outbreaks']
  },
  {
    id: 'leaf-curl',
    name: 'Leaf Curl',
    crop: 'Chilli',
    type: 'Viral',
    plantPart: 'Leaf',
    severity: 'Moderate',
    image:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80',
    summary: 'Virus-induced distortion causing curled and twisted leaves with reduced vigor.',
    symptoms: ['Leaf curling', 'Stunted growth', 'Reduced fruit size'],
    causes: ['Insect vectors', 'Infected planting material', 'Weed hosts'],
    treatment: 'Control insect vectors and remove infected plants to prevent spread.',
    prevention: ['Use clean seed', 'Manage weeds', 'Scout for vector activity'],
    managementTips: ['Remove volunteer hosts', 'Use resistant varieties', 'Inspect young plants carefully']
  },
  {
    id: 'sheath-blight',
    name: 'Sheath Blight',
    crop: 'Rice',
    type: 'Fungal',
    plantPart: 'Stem',
    severity: 'Moderate',
    image:
      'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=900&q=80',
    summary: 'Disease affecting leaf sheaths and lower canopy under dense, humid conditions.',
    symptoms: ['Water-soaked lesions on sheaths', 'Upper leaves drying', 'Poor tillering'],
    causes: ['High humidity', 'Excess nitrogen', 'Dense stands'],
    treatment: 'Adjust nitrogen and maintain field structure to reduce disease pressure with locally supported interventions.',
    prevention: ['Balance nutrition', 'Improve spacing', 'Avoid prolonged flooding'],
    managementTips: ['Scout lower canopy', 'Manage water timing', 'Rotate varieties if needed']
  },
  {
    id: 'brown-spot',
    name: 'Brown Spot',
    crop: 'Rice',
    type: 'Fungal',
    plantPart: 'Leaf',
    severity: 'Moderate',
    image:
      'https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=900&q=80',
    summary: 'Leaf spot disease that can lower grain quality and yield if stress is high.',
    symptoms: ['Brown spots with yellow halos', 'Reduced plant vigor', 'Poor grain filling'],
    causes: ['Water stress', 'Nutrient imbalance', 'High humidity'],
    treatment: 'Manage irrigation and nutrition while monitoring disease spread in vulnerable fields.',
    prevention: ['Keep moisture steady', 'Balanced nutrient plan', 'Use resistant varieties'],
    managementTips: ['Inspect leaves regularly', 'Reduce plant stress', 'Avoid severe nitrogen spikes']
  },
  {
    id: 'leaf-spot',
    name: 'Leaf Spot',
    crop: 'Tomato',
    type: 'Fungal',
    plantPart: 'Leaf',
    severity: 'Moderate',
    image:
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
    summary: 'Circular lesions on leaves can rapidly increase under warm, wet, crowded conditions.',
    symptoms: ['Leaf lesions with yellowing', 'Leaf senescence', 'Reduced fruiting'],
    causes: ['High humidity', 'Crowding', 'Overhead irrigation'],
    treatment: 'Improved spacing, leaf sanitation, and targeted crop protection if local recommendations support it.',
    prevention: ['Mulch and prune', 'Avoid splashing water', 'Maintain active disease scouting'],
    managementTips: ['Remove lower infected leaves', 'Check after rain', 'Keep crop balanced']
  },
  {
    id: 'scab',
    name: 'Scab',
    crop: 'Potato',
    type: 'Fungal',
    plantPart: 'Tuber',
    severity: 'Moderate',
    image:
      'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=80',
    summary: 'Tuber surface lesions impact marketability and can carry forward in seed stock.',
    symptoms: ['Patchy corky lesions on tubers', 'Cracked skin', 'Reduced tuber quality'],
    causes: ['Cool wet soil', 'Seed contamination', 'Acidic soils'],
    treatment: 'Use clean seed and avoid planting in infested soils without risk-reduction practices.',
    prevention: ['Rotate fields', 'Maintain soil pH', 'Use disease-free seed'],
    managementTips: ['Inspect seed lots', 'Avoid overwatering', 'Keep soil structure sound']
  },
  {
    id: 'septoria',
    name: 'Septoria',
    crop: 'Wheat',
    type: 'Fungal',
    plantPart: 'Leaf',
    severity: 'Moderate',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
    summary: 'Leaf spotting disease that becomes severe when humidity persists through the season.',
    symptoms: ['Tiny dark spots with lighter centers', 'Leaf yellowing', 'Reduced canopy efficiency'],
    causes: ['Moisture', 'Dense canopy', 'Susceptible varieties'],
    treatment: 'Select resistant varieties and maintain field conditions that limit prolonged canopy wetness.',
    prevention: ['Avoid dense planting', 'Use certified seed', 'Monitor early'],
    managementTips: ['Scout after rain', 'Manage residue', 'Balance nutrition']
  },
  {
    id: 'powdery-mildew',
    name: 'Powdery Mildew',
    crop: 'Grapes',
    type: 'Fungal',
    plantPart: 'Leaf',
    severity: 'Moderate',
    image:
      'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=900&q=80',
    summary: 'White fungal coating on vines reduces photosynthesis and fruit quality.',
    symptoms: ['White powdery patches on leaves', 'Curling foliage', 'Reduced fruit set'],
    causes: ['Warm dry days', 'High humidity at night', 'Dense growth'],
    treatment: 'Improve airflow, reduce leaf density, and use appropriate commercial practices based on local advice.',
    prevention: ['Prune to improve ventilation', 'Avoid excessive nitrogen', 'Monitor early'],
    managementTips: ['Inspect leaf surfaces', 'Manage humidity', 'Keep crop clean']
  },
  {
    id: 'bacterial-blight',
    name: 'Bacterial Blight',
    crop: 'Cotton',
    type: 'Bacterial',
    plantPart: 'Leaf',
    severity: 'High',
    image:
      'https://images.unsplash.com/photo-1569161092440-a2d9f5d3b28b?auto=format&fit=crop&w=900&q=80',
    summary: 'Disease leads to water-soaked lesions and can affect leaves, stem, and bolls.',
    symptoms: ['Angular lesions', 'Leaf drop', 'Boll damage'],
    causes: ['Rain and wind', 'Wounded tissue', 'Contaminated residue'],
    treatment: 'Field sanitation and crop protection should be selected based on local agronomic recommendations and product labels.',
    prevention: ['Use clean seed', 'Avoid irrigation splashing', 'Rotate fields'],
    managementTips: ['Scout often', 'Remove infected debris', 'Avoid mechanical injury']
  }
]

const classifierImageSources = {
  'early-blight': plantVillageImage('Tomato___Early_blight', '0012b9d2-2130-4a06-a834-b1f3af34f57e___RS_Erly.B 8389.JPG'),
  'late-blight': plantVillageImage('Potato___Late_blight', '0051e5e8-d1c4-4a84-bf3a-a426cdad6285___RS_LB 4640.JPG'),
  'bacterial-spot': plantVillageImage('Tomato___Bacterial_spot', '00416648-be6e-4bd4-bc8d-82f43f8a7240___GCREC_Bact.Sp 3110.JPG'),
  'apple-scab': plantVillageImage('Apple___Apple_scab', '00075aa8-d81a-4184-8541-b692b78d398a___FREC_Scab 3335.JPG'),
  'apple-black-rot': plantVillageImage('Apple___Black_rot', '0090d05d-d797-4c99-abd4-3b9cb323a5fd___JR_FrgE.S 8727.JPG'),
  'apple-cedar-apple-rust': plantVillageImage('Apple___Cedar_apple_rust', '025b2b9a-0ec4-4132-96ac-7f2832d0db4a___FREC_C.Rust 3655.JPG'),
  'cherry-powdery-mildew': plantVillageImage('Cherry_(including_sour)___Powdery_mildew', '00705aa7-5ea2-4419-9440-8ba65e108eb9___FREC_Pwd.M 0267.JPG'),
  'corn-gray-leaf-spot': plantVillageImage('Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot', '00120a18-ff90-46e4-92fb-2b7a10345bd3___RS_GLSp 9357.JPG'),
  'corn-common-rust': plantVillageImage('Corn_(maize)___Common_rust_', 'RS_Rust 1563.JPG'),
  'corn-northern-leaf-blight': plantVillageImage('Corn_(maize)___Northern_Leaf_Blight', '005318c8-a5fa-4420-843b-23bdda7322c2___RS_NLB 3853 copy.jpg'),
  'grape-black-rot': plantVillageImage('Grape___Black_rot', '00090b0f-c140-4e77-8d20-d39f67b75fcc___FAM_B.Rot 0376.JPG'),
  'grape-esca': plantVillageImage('Grape___Esca_(Black_Measles)', '0075b632-2e34-4e4f-9697-fe2b332b7ef8___FAM_B.Msls 4399.JPG'),
  'grape-leaf-blight': plantVillageImage('Grape___Leaf_blight_(Isariopsis_Leaf_Spot)', '0001aa74-bbd7-433b-a900-1dccab39d521___FAM_L.Blight 4508.JPG'),
  'orange-huanglongbing': plantVillageImage('Orange___Haunglongbing_(Citrus_greening)', '00045d08-898c-40df-ada6-e7579637a1f9___UF.Citrus_HLB_Lab 1690.JPG'),
  'peach-bacterial-spot': plantVillageImage('Peach___Bacterial_spot', '00130039-8425-42e9-9dd9-15aead7271ff___Rut._Bact.S 3421.JPG'),
  'bell-pepper-bacterial-spot': plantVillageImage('Pepper,_bell___Bacterial_spot', '0022d6b7-d47c-4ee2-ae9a-392a53f48647___JR_B.Spot 8964.JPG'),
  'potato-early-blight': plantVillageImage('Potato___Early_blight', '001187a0-57ab-4329-baff-e7246a9edeb0___RS_Early.B 8178.JPG'),
  'squash-powdery-mildew': plantVillageImage('Squash___Powdery_mildew', '0045a100-36d3-45df-b417-d487d6e07eb4___UMD_Powd.M 0003.JPG'),
  'strawberry-leaf-scorch': plantVillageImage('Strawberry___Leaf_scorch', '0024203d-6e4c-490f-b9a8-e5926df0b76e___RS_L.Scorch 0795.JPG'),
  'tomato-late-blight': plantVillageImage('Tomato___Late_blight', '0003faa8-4b27-4c65-bf42-6d9e352ca1a5___RS_Late.B 4946.JPG'),
  'tomato-leaf-mold': plantVillageImage('Tomato___Leaf_Mold', '00694db7-3327-45e0-b4da-a8bb7ab6a4b7___Crnl_L.Mold 6923.JPG'),
  'tomato-septoria-leaf-spot': plantVillageImage('Tomato___Septoria_leaf_spot', '002533c1-722b-44e5-9d2e-91f7747b2543___Keller.St_CG 1831.JPG'),
  'tomato-spider-mites': plantVillageImage('Tomato___Spider_mites Two-spotted_spider_mite', '002835d1-c18e-4471-aa6e-8d8c29585e9b___Com.G_SpM_FL 8584.JPG'),
  'tomato-target-spot': plantVillageImage('Tomato___Target_Spot', '002213fb-b620-4593-b9ac-6a6cc119b100___Com.G_TgS_FL 8360.JPG'),
  'tomato-yellow-leaf-curl-virus': plantVillageImage('Tomato___Tomato_Yellow_Leaf_Curl_Virus', '00139ae8-d881-4edb-925f-46584b0bd68c___YLCV_NREC 2944.JPG'),
  'tomato-mosaic-virus': plantVillageImage('Tomato___Tomato_mosaic_virus', '000ec6ea-9063-4c33-8abe-d58ca8a88878___PSU_CG 2169.JPG')
}

const generalGuidance = {
  Fungal: {
    causes: ['A fungal pathogen infects susceptible plant tissue.', 'Warm, humid weather or prolonged leaf wetness can increase disease pressure.', 'Infected crop debris or planting material may carry the pathogen.'],
    treatment: 'Remove badly affected material where practical, reduce leaf wetness, and use only locally registered treatments according to the product label.',
    prevention: ['Use clean planting material and resistant varieties where available.', 'Improve airflow and avoid unnecessary overhead watering.', 'Remove infected debris and rotate crops when practical.'],
    managementTips: ['Check plants regularly, especially after humid or rainy weather.', 'Avoid handling plants while foliage is wet.', 'Confirm the diagnosis with local agricultural guidance before treatment.']
  },
  Bacterial: {
    causes: ['A bacterial pathogen infects susceptible plant tissue.', 'Rain splash, wet foliage, wounds, or contaminated tools can aid spread.', 'Infected seed or crop residue may be a source of infection.'],
    treatment: 'Remove severely affected material when practical, limit splash and handling of wet plants, and follow local extension guidance for approved treatments.',
    prevention: ['Use clean seed or planting material.', 'Sanitize tools and avoid working among wet plants.', 'Use crop rotation and remove infected debris where practical.'],
    managementTips: ['Scout for new symptoms after rain or irrigation.', 'Avoid moving from affected to healthy plants without cleaning tools.', 'Confirm the diagnosis with local agricultural guidance.']
  },
  Viral: {
    causes: ['A plant virus infects susceptible plants.', 'Insect vectors or infected planting material can spread the virus.', 'Volunteer plants and weeds may host vectors or the virus.'],
    treatment: 'There is no curative treatment for an infected plant. Remove severely affected plants where appropriate and manage insect vectors using locally approved integrated methods.',
    prevention: ['Use certified virus-free planting material and resistant varieties where available.', 'Monitor and manage insect vectors and weed hosts.', 'Clean tools and remove volunteer plants.'],
    managementTips: ['Inspect young plants for early symptoms.', 'Remove suspected infected plants carefully to limit spread.', 'Seek local agricultural advice to confirm the virus and vector.']
  },
  'Pest-related': {
    causes: ['Spider mites feed on plant tissue, commonly on leaf undersides.', 'Hot, dry conditions can favor rapid mite population growth.', 'Mites can spread between nearby plants and through infested plant material.'],
    treatment: 'Check leaf undersides and use integrated pest management; choose only locally approved controls and follow label directions.',
    prevention: ['Monitor leaf undersides regularly, especially in hot, dry weather.', 'Reduce plant stress and manage weeds around the crop.', 'Avoid unnecessary broad-spectrum pesticide use that can harm beneficial predators.'],
    managementTips: ['Check several plants across the field before deciding on treatment.', 'Look for stippling, webbing, and moving mites with a hand lens.', 'Recheck plants after any management action.']
  }
}

const classifierDiseases = [
  { id: 'apple-scab', name: 'Apple Scab', crop: 'Apple', type: 'Fungal', plantPart: 'Leaves and fruit', severity: 'Moderate', summary: 'Olive-green to dark, scabby lesions can develop on apple leaves and fruit, especially in wet spring weather.', symptoms: ['Olive or dark velvety spots on leaves', 'Scabby, cracked marks on fruit', 'Premature leaf drop'] },
  { id: 'apple-black-rot', name: 'Apple Black Rot', crop: 'Apple', type: 'Fungal', plantPart: 'Fruit and branches', severity: 'High', summary: 'Black rot can cause firm brown fruit decay and cankers on branches, with leaf spots also appearing.', symptoms: ['Brown fruit decay that may form dark rings', 'Sunken cankers on branches', 'Frog-eye leaf spots with pale centers'] },
  { id: 'apple-cedar-apple-rust', name: 'Cedar Apple Rust', crop: 'Apple', type: 'Fungal', plantPart: 'Leaves and fruit', severity: 'Moderate', summary: 'This rust alternates between cedar or juniper hosts and apple, producing bright leaf spots during the growing season.', symptoms: ['Yellow-orange spots on upper leaf surfaces', 'Orange spore structures beneath leaves', 'Fruit blemishes or distortion in severe cases'] },
  { id: 'cherry-powdery-mildew', name: 'Cherry Powdery Mildew', crop: 'Cherry', type: 'Fungal', plantPart: 'Leaves and shoots', severity: 'Moderate', summary: 'Powdery mildew forms pale fungal growth on cherry foliage and young shoots, often distorting new growth.', symptoms: ['White powdery patches on leaves', 'Curled or distorted young leaves', 'Stunted shoot growth'] },
  { id: 'corn-gray-leaf-spot', name: 'Corn Cercospora / Gray Leaf Spot', crop: 'Corn (Maize)', type: 'Fungal', plantPart: 'Leaf', severity: 'Moderate', summary: 'Gray leaf spot produces elongated, rectangular lesions between leaf veins, often spreading in humid crop canopies.', symptoms: ['Long tan or gray lesions aligned with leaf veins', 'Lesions may merge as disease advances', 'Premature drying of lower leaves'] },
  { id: 'corn-common-rust', name: 'Corn Common Rust', crop: 'Corn (Maize)', type: 'Fungal', plantPart: 'Leaf', severity: 'Moderate', summary: 'Common rust creates raised cinnamon-brown pustules on corn leaves, with greater risk in cool, moist conditions.', symptoms: ['Small, raised reddish-brown pustules', 'Pustules on both sides of leaves', 'Yellowing around heavy infections'] },
  { id: 'corn-northern-leaf-blight', name: 'Corn Northern Leaf Blight', crop: 'Corn (Maize)', type: 'Fungal', plantPart: 'Leaf', severity: 'High', summary: 'Northern leaf blight causes long, cigar-shaped lesions that can expand across corn leaves in warm, humid weather.', symptoms: ['Long gray-green or tan cigar-shaped lesions', 'Lesions expand along the leaf', 'Large areas of foliage may dry in severe cases'] },
  { id: 'grape-black-rot', name: 'Grape Black Rot', crop: 'Grape', type: 'Fungal', plantPart: 'Leaves and berries', severity: 'High', summary: 'Black rot affects grape leaves and berries, with infected fruit shriveling into dark mummies.', symptoms: ['Small brown leaf spots with dark borders', 'Berries turn brown, then black and shriveled', 'Dark fruiting bodies may appear on infected tissue'] },
  { id: 'grape-esca', name: 'Grape Esca (Black Measles)', crop: 'Grape', type: 'Fungal', plantPart: 'Leaves and woody tissue', severity: 'High', summary: 'Esca is a grapevine trunk disease associated with internal wood decay and characteristic leaf discoloration.', symptoms: ['Interveinal leaf striping with scorched margins', 'Dark speckling or spotting on berries', 'Sudden wilting or dieback of shoots'] },
  { id: 'grape-leaf-blight', name: 'Grape Leaf Blight (Isariopsis Leaf Spot)', crop: 'Grape', type: 'Fungal', plantPart: 'Leaf', severity: 'Moderate', summary: 'Isariopsis leaf blight produces angular brown lesions that can merge and reduce healthy grape leaf area.', symptoms: ['Angular reddish-brown leaf spots', 'Dark margins around lesions', 'Premature yellowing and leaf drop'] },
  { id: 'orange-huanglongbing', name: 'Orange Huanglongbing (Citrus Greening)', crop: 'Orange', type: 'Bacterial', plantPart: 'Leaves and fruit', severity: 'High', summary: 'Citrus greening causes blotchy leaf mottling, uneven fruit coloring, and declining tree health; symptoms can resemble nutrient disorders.', symptoms: ['Asymmetric yellow mottling across leaf veins', 'Small, lopsided fruit with uneven coloring', 'Twig dieback and gradual canopy decline'] },
  { id: 'peach-bacterial-spot', name: 'Peach Bacterial Spot', crop: 'Peach', type: 'Bacterial', plantPart: 'Leaves and fruit', severity: 'Moderate', summary: 'Bacterial spot causes small dark lesions on peach leaves and fruit, often followed by leaf shot-holing.', symptoms: ['Small purple-brown leaf spots', 'Holes where dead leaf tissue falls away', 'Pitted or cracked fruit lesions'] },
  { id: 'bell-pepper-bacterial-spot', name: 'Bell Pepper Bacterial Spot', crop: 'Bell Pepper', type: 'Bacterial', plantPart: 'Leaves and fruit', severity: 'Moderate', summary: 'Bacterial spot creates water-soaked leaf lesions and raised or scabby blemishes on pepper fruit.', symptoms: ['Small water-soaked spots with yellow halos', 'Dark lesions on stems and leaves', 'Raised scabby spots on fruit'] },
  { id: 'potato-early-blight', name: 'Potato Early Blight', crop: 'Potato', type: 'Fungal', plantPart: 'Leaf', severity: 'Moderate', summary: 'Early blight commonly starts on older potato leaves as brown lesions with visible concentric rings.', symptoms: ['Dark circular leaf spots with target-like rings', 'Yellowing around lesions', 'Lower leaves may dry and drop'] },
  { id: 'squash-powdery-mildew', name: 'Squash Powdery Mildew', crop: 'Squash', type: 'Fungal', plantPart: 'Leaf', severity: 'Moderate', summary: 'Powdery mildew develops as white surface growth on squash leaves and can reduce plant vigor.', symptoms: ['White powdery patches on leaf surfaces', 'Yellowing beneath infected areas', 'Leaves may dry and become brittle'] },
  { id: 'strawberry-leaf-scorch', name: 'Strawberry Leaf Scorch', crop: 'Strawberry', type: 'Fungal', plantPart: 'Leaf', severity: 'Moderate', summary: 'Leaf scorch causes numerous small purple-red spots that can merge into scorched-looking strawberry foliage.', symptoms: ['Small dark red or purple leaf spots', 'Brown centers within older lesions', 'Leaf margins may dry or scorch'] },
  { id: 'tomato-late-blight', name: 'Tomato Late Blight', crop: 'Tomato', type: 'Fungal', plantPart: 'Leaves and stems', severity: 'High', summary: 'Late blight can spread rapidly, producing water-soaked lesions on tomato foliage and stems during cool, wet weather.', symptoms: ['Irregular water-soaked leaf lesions', 'White growth may appear beneath leaves in humid conditions', 'Dark stem lesions and rapid plant collapse'] },
  { id: 'tomato-leaf-mold', name: 'Tomato Leaf Mold', crop: 'Tomato', type: 'Fungal', plantPart: 'Leaf', severity: 'Moderate', summary: 'Leaf mold is favored by high humidity and typically begins as pale patches on upper tomato leaf surfaces.', symptoms: ['Pale yellow patches on upper leaf surfaces', 'Olive-green or gray mold beneath leaves', 'Leaves curl, dry, and may drop'] },
  { id: 'tomato-septoria-leaf-spot', name: 'Tomato Septoria Leaf Spot', crop: 'Tomato', type: 'Fungal', plantPart: 'Leaf', severity: 'Moderate', summary: 'Septoria leaf spot causes many small circular lesions, commonly beginning on lower tomato leaves.', symptoms: ['Small round spots with pale centers and dark edges', 'Tiny dark specks within lesions', 'Lower leaves yellow and die back'] },
  { id: 'tomato-spider-mites', name: 'Tomato Spider Mites (Two-Spotted)', crop: 'Tomato', type: 'Pest-related', plantPart: 'Leaf', severity: 'Moderate', summary: 'Two-spotted spider mites feed on leaf undersides, causing stippling, bronzing, and sometimes fine webbing.', symptoms: ['Fine pale stippling on leaves', 'Bronzed or dry foliage', 'Fine webbing and tiny mites beneath leaves'] },
  { id: 'tomato-target-spot', name: 'Tomato Target Spot', crop: 'Tomato', type: 'Fungal', plantPart: 'Leaves and fruit', severity: 'Moderate', summary: 'Target spot causes circular brown lesions with concentric rings on tomato leaves, stems, and sometimes fruit.', symptoms: ['Brown circular lesions with concentric rings', 'Yellowing around leaf spots', 'Dark sunken lesions may develop on fruit'] },
  { id: 'tomato-yellow-leaf-curl-virus', name: 'Tomato Yellow Leaf Curl Virus', crop: 'Tomato', type: 'Viral', plantPart: 'Leaf and shoots', severity: 'High', summary: 'This whitefly-transmitted virus causes upward leaf curling, yellowing, and stunted tomato growth.', symptoms: ['Upward curling and yellowing of leaves', 'Shortened internodes and stunted plants', 'Reduced flowering and fruit set'] },
  { id: 'tomato-mosaic-virus', name: 'Tomato Mosaic Virus', crop: 'Tomato', type: 'Viral', plantPart: 'Leaves and fruit', severity: 'Moderate', summary: 'Tomato mosaic virus can produce mottled foliage, leaf distortion, and uneven fruit development.', symptoms: ['Light and dark green mosaic pattern on leaves', 'Narrowed or distorted young leaves', 'Uneven fruit color or reduced fruit size'] }
]

const diseases = [
  ...existingDiseases
    .filter((disease) => ['early-blight', 'late-blight', 'bacterial-spot'].includes(disease.id))
    .map((disease) => classifierImageSources[disease.id]
    ? { ...disease, image: classifierImageSources[disease.id], imageCredit: plantVillageCredit }
    : disease),
  ...classifierDiseases.map((disease) => ({
    ...disease,
    image: classifierImageSources[disease.id],
    imageCredit: plantVillageCredit,
    ...generalGuidance[disease.type]
  }))
]

export { diseases }

export const diseaseFilterOptions = ['All', 'Fungal', 'Bacterial', 'Viral', 'Pest-related', 'Nutrient-related']
