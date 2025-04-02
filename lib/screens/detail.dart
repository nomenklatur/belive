import 'package:belive/const/styles.dart';
import 'package:belive/widgets/facility_item.dart';
import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

class DetailScreen extends StatelessWidget {

  final _mapUrl = "https://g.co/kgs/ScPXbMX";
  const DetailScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: SafeArea(
        bottom: false,
        child: Stack(
          children: [
            Image.asset(
              'images/cities/jakarta.jpg',
              width: MediaQuery.of(context).size.width,
              height: 350,
              fit: BoxFit.cover,
            ),
            ListView(
                children: [
                  const SizedBox(height: 328),
                  Container(
                    width: MediaQuery.of(context).size.width,
                    decoration: const BoxDecoration(
                      borderRadius: BorderRadius.vertical(
                        top: Radius.circular(20)
                      ),
                      color: Colors.white
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const SizedBox(height: 30),
                        Padding(
                          padding: const EdgeInsets.symmetric(horizontal: 24),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(
                                    'Kurotakesso Hott',
                                    style: AppFonts.dark.copyWith(fontSize: 22),
                                  ),
                                  const SizedBox(height: 2),
                                  Text.rich(
                                    TextSpan(
                                      text: '52',
                                      style: AppFonts.primary.copyWith(fontSize: 16),
                                      children: [
                                        TextSpan(text: ' / bulan', style: AppFonts.secondary.copyWith(fontSize: 16))
                                      ]
                                    )
                                  ),
                                ],
                              ),
                              const Row(
                                children: [
                                  Icon(Icons.star, color: Colors.yellow,),
                                  Icon(Icons.star, color: Colors.yellow,),
                                  Icon(Icons.star, color: Colors.yellow,),
                                  Icon(Icons.star, color: Colors.yellow,),
                                  Icon(Icons.star, color: Colors.grey,)
                                ],
                              )
                            ],
                          ),
                        ),
                        const SizedBox(height: 30),
                        Padding(
                          padding: const EdgeInsets.only(left: 24),
                          child: Text('Fasilitas Hunian', style: AppFonts.regular.copyWith(fontSize: 16)),
                        ),
                        const SizedBox(height: 12),
                        const Padding(
                          padding: EdgeInsets.symmetric(horizontal: 24),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              FacilityItem(
                                facilityCount: 1,
                                facilityName: 'Dapur',
                                facilityIcon: Icons.kitchen,
                              ),
                              FacilityItem(
                                facilityCount: 2,
                                facilityName: 'Kamar Tidur',
                                facilityIcon: Icons.bed,
                              ),
                              FacilityItem(
                                facilityCount: 1,
                                facilityName: 'Kamar Mandi',
                                facilityIcon: Icons.shower,
                              )
                            ],
                          ),
                        ),
                        const SizedBox(height: 30),
                        Padding(
                          padding: const EdgeInsets.only(left: 24),
                          child: Text('Gambar', style: AppFonts.regular.copyWith(fontSize: 16)),
                        ),
                        const SizedBox(height: 12),
                        Container(
                          height: 88,
                          padding: const EdgeInsets.symmetric(horizontal: 24),
                          child: ListView(
                            scrollDirection: Axis.horizontal,
                            children: [
                              Image.asset(
                                'images/facilities/bedroom.png',
                                width: 110,
                                height: 88,
                                fit: BoxFit.cover,
                              ),
                              const SizedBox(width: 18),
                              Image.asset(
                                'images/facilities/bathroom.png',
                                width: 110,
                                height: 88,
                                 fit: BoxFit.cover,
                              ),
                              const SizedBox(width: 18),
                              Image.asset(
                                'images/facilities/kitchen.png',
                                width: 110,
                                height: 88,
                                fit: BoxFit.cover,
                              )
                            ],
                          ),
                        ),
                        const SizedBox(height: 30),
                        Padding(
                          padding: const EdgeInsets.only(left: 24),
                          child: Text('Alamat', style: AppFonts.regular.copyWith(fontSize: 16)),
                        ),
                        const SizedBox(height: 6),
                        Padding(
                          padding: const EdgeInsets.symmetric(horizontal: 24),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Text(
                                'Jalan Ini, Gg. Itu No. 11A \nJakarta', 
                                style: AppFonts.secondary.copyWith(fontSize: 16),
                              ),
                              InkWell(
                                onTap: () { launchUrl(Uri.parse(_mapUrl));},
                                child: const Icon(Icons.location_pin, size: 40, color: AppColors.secondary,)
                              )
                            ],
                          ),
                        ),
                        const SizedBox(height: 40),
                        Container(
                          margin: const EdgeInsets.symmetric(horizontal: 24),
                          height: 50,
                          width: MediaQuery.of(context).size.width - (2 * 24),
                          child: ElevatedButton(
                            onPressed: (){ launchUrl(Uri(scheme: 'tel', path: '+6285261788777')); },
                            style: const ButtonStyle(
                              backgroundColor: WidgetStatePropertyAll(AppColors.primary)
                            ),
                            child: Text(
                              'Pesan Sekarang',
                              style: AppFonts.light.copyWith(fontSize: 18),
                            ),
                          ),
                        ),
                        const SizedBox(height: 40),
                      ],
                    ),
                  ),
                  
                ],
              ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 30),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  IconButton.filled(
                    onPressed: (){ Navigator.pop(context);}, 
                    icon: const Icon(Icons.chevron_left, color: Colors.black,),
                    style: IconButton.styleFrom(
                      backgroundColor: Colors.white
                    ),
                  ),
                  IconButton.filled(
                    onPressed: (){}, 
                    icon: const Icon(Icons.favorite_outline, color: Colors.black,),
                    style: IconButton.styleFrom(
                      backgroundColor: Colors.white
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}