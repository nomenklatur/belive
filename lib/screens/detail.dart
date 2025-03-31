import 'package:belive/const/styles.dart';
import 'package:flutter/material.dart';

class DetailScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
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
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 30),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  IconButton.filled(
                    onPressed: (){ print('pressed');}, 
                    icon: Icon(Icons.chevron_left, color: Colors.black,),
                    style: IconButton.styleFrom(
                      backgroundColor: Colors.white
                    ),
                  ),
                  IconButton.filled(
                    onPressed: (){}, 
                    icon: Icon(Icons.favorite_outline, color: Colors.black,),
                    style: IconButton.styleFrom(
                      backgroundColor: Colors.white
                    ),
                  ),
                ],
              ),
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
                                  SizedBox(height: 2),
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
                        )
                      ],
                    ),
                  )
                ],
              ),
          ],
        ),
      ),
    );
  }
}