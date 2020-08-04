# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Animal.destroy_all
State.destroy_all
Organization.destroy_all

#ALABAMA
indian_manatee = Animal.create!(species:'Mammal',name:'Indian Manatee',count:6500,img:'https://ecos.fws.gov/docs/species_images/doc3661-250px-thumbnail.jpg',critical:false,rise:false,description:'	
Threatened; A species likely to become endangered within the foreseeable future throughout all or a significant portion of its range. Manatees are protected under the Marine Mammal Protection Act, which prohibits the take (i.e., harass, hunt, capture, or kill) of all marine mammals. Manatees are found in marine, estuarine, and freshwater environments. The West Indian manatee, Trichechus manatus, includes two distinct subspecies, the Florida manatee (Trichechus manatus latirostris) and the Antillean manatee (Trichechus manatus manatus). While morphologically distinctive, both subspecies have many common features. Manatees have large, seal-shaped bodies with paired flippers and a round, paddle-shaped tail. They are typically grey in color (color can range from black to light brown) and occasionally spotted with barnacles or colored by patches of green or red algae. The muzzle is heavily whiskered and coarse, single hairs are sparsely distributed throughout the body. Adult manatees, on average, are about nine feet long (3 meters) and weigh about 1,000 pounds (200 kilograms). At birth, calves are between three and four feet long (1 meter) and weigh between 40 and 60 pounds (30 kilograms).', threats:'Commercial & industrial areas,
Tourism & recreation areas, Domestic & urban waste water,
Industrial & military effluents,
Agricultural & forestry effluents,
Excess energy')

black_pine_snake = Animal.create!(species:'Reptile', name:'Black Pine Snake',img:'https://ecos.fws.gov/docs/species_images/doc5680-250px-thumbnail.jpg',critical:true,rise:false,description:'	
Adults average from 48-64 inches (122-163 cm). The record is 89 inches (226 cm). A large stocky snake. Back and belly are uniform (or nearly so) black or dark brown. Faint blotches may be seen on the hindbody or tail. In')

flattened_musk_turtle = Animal.create!(species:'Reptile', name:'Flattened Musk Turtle',img:'https://ecos.fws.gov/docs/species_images/doc4502-250px-thumbnail.jpg',critical:true,rise:false,description:'The flattened musk turtle is a small aquatic turtle with a distinctly flattened carapace up to 119 millimeters (4.7 in) long. Keels are virtually, if not altogether, lacking (Mount 1981). The carapace is dark brown to orange with dark bordered seams and is slightly serrated behind (Ernest and Barbour 1972). The plastron is pink to yellowish. The head is greenish with a dark reticulum that often breaks up to form spots on the top of the snout (Mount 1981). Stripes on the top and sides of the neck, if present, are narrow. There are two barbels on the chin, all four feet are webbed, and males have thick, long, spine-tipped tails (Ernst and Barbour 1972).', habitat:'No critical habitat has been designated for this species.',threats:'Mining & quarrying,Domestic & urban waste water,
Industrial & military effluents,
Agricultural & forestry effluents')

wood_stork = Animal.create!(species:'Bird', name:'Wood Stork',img:'https://ecos.fws.gov/docs/species_images/doc5013-250px-thumbnail.jpg',critical:false,rise:true,description:'Wood storks are large, long-legged wading birds, about 5O inches tall, with a wingspan of 60 to 65 inches. The plumage is white except for black primaries and secondaries and a short black tail. The head and neck are largely unfeathered and dark gray in color. The bill is black, thick at the base, and slightly decurved. Immature birds are dingy gray and have a yellowish bill.', habitat:'No critical habitat has been designated for this species.')

savethemanatee =Organization.create!(name:'Save The Manatee',mission:'Save the Manatee Club was founded in 1981 by Bob Graham, former Florida Governor and U.S. Senator, and singer/songwriter Jimmy Buffett. The Club was started with the mission to protect manatees and their habitat. Today, Save the Manatee Club is the world’s leading manatee conservation organization.', since:1981,img:'https://www.savethemanatee.org/wp-content/uploads/2017/02/smc_logo_150.png', link:'https://www.savethemanatee.org/')

edge =Organization.create!(name:'EDGE',mission:'The EDGE of Existence programme highlights and protects some of the most unique species on the planet, which are on the verge of extinction.',img:'https://www.edgeofexistence.org/wp-content/themes/zsledge/dist/img/footer-logo.png', link:'https://www.edgeofexistence.org/')

nature_conservancy= Organization.create!(name:'The Nature Conservancy',mission:'The Nature Conservancy is a nonprofit, tax-exempt charitable organization (tax identification number 53-0242652) under Section 501(c)(3) of the U.S. Internal Revenue Code. Donations are tax-deductible as allowed by law. Global sites represent either regional branches of The Nature Conservancy or local affiliates of The Nature Conservancy that are separate entities.',img:'https://www.nature.org/content/dam/tnc/nature/en/logos/tnc-logo-white.svg', link:'https://www.nature.org/en-us/about-us/where-we-work/united-states/florida/stories-in-florida/wood-storks-at-disney-wilderness-preserve/')

alabama1=State.create!(animal_id:indian_manatee.id,organization_id:savethemanatee.id,state:'Alabama',short:'AR'),


alabama3=State.create!(animal_id:flattened_musk_turtle.id,organization_id:edge.id,state:'Alabama',short:'AR')

alabama4=State.create!(animal_id:wood_stork.id,organization_id:nature_conservancy.id,state:'Alabama',short:'AR')

alabama2=State.create!(animal_id:black_pine_snake.id,organization_id:nature_conservancy.id,state:'Alabama',short:'AR')




# ALASKA
polar_bear = Animal.create!(species:'Mammal',name:'Polar Bear',count:20000,img:'https://ecos.fws.gov/docs/species_images/doc5025-250px-thumbnail.jpg',critical:true,rise:false,description:'Throughout the Arctic, polar bears are known by a variety of common names,
including nanook, nanuq, ice bear, sea bear, isbjorn, white bears, and beliy medved.
Genetic research has confirmed that polar bears evolved from grizzly (brown)
bears (Ursus arctos) 250 to 300 thousand years ago (Cronin et al. 1991, p. 2990;
Talbot and Shields 1996a, p. 574). Only in portions of northern Canada and
northern Alaska do the ranges of polar bears and grizzly bears overlap. Polar bears are the largest of the living bear species. Polar bears are carnivorous and an upper level predator of the Arctic marine ecosystem. Polar bears prey heavily throughout their range on ringed seals (Phoca hispida) and, to a lesser extent, bearded seals (Erignathus barbatus) and in some locales, other seal species.
Polar bears are characterized by a late age at sexual maturity, small litter sizes, and extended parental investment in raising young, factors that combine to contribute to a very low reproductive rate. Reproduction in the female polar
bear is similar to that in other ursids (bears). Females generally mature and breed for the first time at 4 or 5 years and give birth at 5 or 6 years of age. Litters of two cubs are most common, but litters of three cubs are seen sporadically across the Arctic.', threats:'Commercial & industrial areas
Tourism & recreation areas, Oil & gas drilling,Hunting & trapping terrestrial animals')

eider = Animal.create!(species:'Bird',name:'Spectacled Eider',count:nil,img:'https://ecos.fws.gov/docs/species_images/doc4940-250px-thumbnail.jpg',critical:true,rise:false,description:'Spectacled eiders are large sea ducks, 52 to 56 centimeters long (20 to 22 inches). In the winter and spring, adult males are in breeding plumage with a black chest, white back, and pale green head with a long, sloping forehead and white patches resembling spectacles around the eyes. During the late summer and fall, males are entirely mottled brown. Females and juveniles are mottled brown yearÃ¢ï¿½ï¿½round with pale brown eye patches.', threats:'Commercial & industrial areas
Tourism & recreation areas, Industrial & military effluents
Garbage & solid waste')

albatross = Animal.create!(species:'Bird',name:'Short-tailed Albatross',count:1734,img:'https://ecos.fws.gov/docs/species_images/doc5018-250px-thumbnail.jpg',critical:false,rise:true,description:'The largest and only white-bodied albatross in the north Pacific. Golden, yellow cast on head and nape. Upper wings: white with black primaries, secondaries, and tertials. Under wing: white with black leading and trailing edges. White tail with black fringe. Large, pink bill with blue tip and black boarder around the base. Pale bluish feet and legs. Length: 84-91 cm (33.6-36.4 in); wingspan: 213-229 cm (7-7.5 ft); average life span: 12-45 yrs.', threats:'Commercial & industrial areas
Tourism & recreation areas, Oil & gas drilling,Hunting & trapping terrestrial animals')

savethepolarbear =Organization.create!(name:'Polar Bears International',mission:'The only way to save the bears and their sea ice habitats is to control temperature rise through greenhouse gas mitigation.', since:nil,img:'https://polarbearsinternational.org/img/home/PBI-logo.png', link:'https://polarbearsinternational.org/')

iucn=Organization.create!(name:'IUCN',mission:'IUCN, International Union for Conservation of Nature', since:nil,img:'https://www.iucn.org/sites/dev/files/iucn_logo-small_0.png', link:'https://www.iucn.org/')

audubon = Organization.create!(name:'AUDUBON',mission:'The National Audubon Society protects birds and the places they need, today and tomorrow, throughout the Americas using science, advocacy, education, and on-the-ground conservation.', since:1905,img:'https://nas-national-prod.s3.amazonaws.com/styles/bird_illustration/s3/2131_Sibl_9780307957900_art_r1.jpg?itok=W1XdznW0', link:'https://www.audubon.org/field-guide/bird/spectacled-eider')

alaska1=State.create!(animal_id:polar_bear.id,organization_id:savethepolarbear.id,state:'Alaska',short:'AK')
alaska2=State.create!(animal_id:polar_bear.id,organization_id:iucn.id,state:'Alaska',short:'AK')
alaska3=State.create!(animal_id:eider.id,organization_id:iucn.id,state:'Alaska',short:'AK')
alaska4=State.create!(animal_id:eider.id,organization_id:audubon.id,state:'Alaska',short:'AK')
alaska5=State.create!(animal_id:albatross.id,organization_id:iucn.id,state:'Alaska',short:'AK')
alaska6=State.create!(animal_id:albatross.id,organization_id:audubon.id,state:'Alaska',short:'AK')

# ARIZONA
blackferret = Animal.create!(species:'Mammal',name:'Black-footed Ferret',count:206,img:'https://ecos.fws.gov/docs/species_images/doc5012-250px-thumbnail.jpg',critical:true,rise:false,description:'The black-footed ferret is 18 to 24 inches long, including a 5 to 6 inch tail. It weighs only one-and-a-half to two-and-a-half pounds, with males slightly larger than females. The black-footed ferret is well adapted to its prairie environment. Its color and markings blend so well with grassland soils and plants, that it is hard to detect until it moves. It is a slender, wiry animal with a black face mask, black feet, and a black-tipped tail. The rest of its short, sleek fur is a yellow-buff color, lighter on the belly and nearly white on the forehead, muzzle, and throat.', threats:'Housing & urban areas,Hunting & trapping terrestrial animals')

jaguarA = Animal.create!(species:'Mammal',name:'Jaguar',count:nil,img:'https://s2r.iucnredlist.org/sis2_images/D5Pd3R39-D9d083-XCs.jpg',critical:false,rise:false,description:'A large, heavy-bodied, big-headed cat. Yellowish to tawny, spotted with black rosettes or rings in horizontal rows along the back and sides; most rings are tan inside, with 1 or 2 black spots. Legs, head, and tail have smaller, solid spots, usually giving way to incomplete bands near the end of the tail.', threats:'Oil & gas drilling,
Mining & quarrying')

mxwolf = Animal.create!(species:'Mammal',name:'Mexican wolf',count:nil,img:'https://ecos.fws.gov/docs/species_images/doc4961-250px-thumbnail.jpg',critical:false,rise:true,description:'Endangered; A species in danger of extinction throughout all or a significant portion of its range.', threats:'Oil & gas drilling,
Mining & quarrying')

ocelot = Animal.create!(species:'Mammal',name:'Ocelot',count:nil,img:'https://s2r.iucnredlist.org/sis2_images/799697121.jpg',critical:true,rise:false,description:'Ocelot population densities throughout its entire range varies widely from 2.5 to 160/100 km². At a continental scale, Ocelot densities decrease with latitude and increase with rainfall (Di Bitetti et al. 2008). Primary productivity seems to determine the abundance of this wild cat across their range, but at a local scale their abundance may be affected by logging and poaching or by competition with other species.', threats:'Hunting & trapping terrestrial animals,
Logging & wood harvesting')

wildEarth = Organization.create!(name:'WildEarth Guardians',mission:'WildEarth Guardians protects and restores the wildlife, wild places, wild rivers, and health of the American West.
Driven by passion, we’ve tackled some of the West’s most difficult and pressing conservation challenges over the past three decades.', since:nil,img:'https://wildearthguardians.org/wp-content/uploads/2018/08/weg-logo-1.svg', link:'https://wildearthguardians.org/wildlife-conservation/endangered-species-list/mammals/black-footed-ferret/?gclid=CjwKCAjwjqT5BRAPEiwAJlBuBeLCKrFtSae9072mVh2cmcgqUp7JkoxETfnMh9eg9Yeo3uz4aVII5xoCaDEQAvD_BwE')

afs = Organization.create!(name:'The American Ferret Association',mission:'In 1987, a small group of ferret owners created a ferret club in Montgomery County, Maryland. As the club expanded, members began to organize ferret shows, "fun match" competitions and educational events. To reflect this growth, a new charter was written in 1990 and the club became the mid-Atlantic Ferret Association.', since:1990,img:'https://www.ferret.org/images/header_afa_logo.jpg', link:'https://www.ferret.org/read/BFF-Page.html')


panthera = Organization.create!(name:'Panthera',mission:'Panthera is the only organization in the world that is devoted exclusively to the conservation of the world’s 40 wild cat species and their ecosystems.', since:nil,img:'PANTHERA', link:'https://www.panthera.org/')

northernjp = Organization.create!(name:'Northern Jaguar Project',mission:'We formed the Northern Jaguar Project to safeguard jaguars in this region from poaching and habitat destruction. At the heart of our work is the 86-square-mile Northern Jaguar Reserve, a remote, rugged, and exceedingly wild landscape where a small breeding population of these wild cats survives.', since:nil,img:'http://www.northernjaguarproject.org/wp-content/uploads/2008/09/njp-logo4.jpg', link:'https://www.northernjaguarproject.org/')

awi = Organization.create!(name:'ANIMAL WELFARE INSTITUTE',mission:'Since 1951, the Animal Welfare Institute has been alleviating suffering inflicted on animals by humans. In the early years, AWI founder Christine Stevens sought to end the cruel treatment of animals in experimental laboratories. Inevitably, her work expanded to take on other animal welfare causes.
', since:1951,img:'https://awionline.org/themes/awi/logo.svg', link:'https://awionline.org/cases/protection-ocelots')

arizona1=State.create!(animal_id:blackferret.id,organization_id:wildEarth.id,state:'Arizona',short:'AZ')
arizona2=State.create!(animal_id:blackferret.id,organization_id:afs.id,state:'Arizona',short:'AZ')
arizona3=State.create!(animal_id:jaguarA.id,organization_id:panthera.id,state:'Arizona',short:'AZ')
arizona4=State.create!(animal_id:jaguarA.id,organization_id:northernjp.id,state:'Arizona',short:'AZ')
arizona5=State.create!(animal_id:jaguarA.id,organization_id:awi.id,state:'Arizona',short:'AZ')
arizona6=State.create!(animal_id:ocelot.id,organization_id:awi.id,state:'Arizona',short:'AZ')
arizona7=State.create!(animal_id:ocelot.id,organization_id:panthera.id,state:'Arizona',short:'AZ')



#  t.string :species
#       t.string :name
#       t.integer :count
#       t.string :habitat
#       t.string :img
#       t.boolean :critical
#       t.boolean :rise
#       t.timestamps
#       t.string :description 
#       t.string :threats

#        t.string :name
#       t.string :mission
#       t.integer :since
#       t.string :rating
#       t.string :img

#        t.integer :animal_id
#       t.integer :organization_id
#       t.string :state
#       t.string :short