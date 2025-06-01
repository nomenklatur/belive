import 'package:belive/screens/home.dart';
import 'package:flutter/material.dart';
import 'package:belive/const/styles.dart';

class ErrorScreen extends StatelessWidget {
  const ErrorScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        bottom: false,
        child: Center(
          child: SingleChildScrollView(
            padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 32),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Image.asset('images/404.png', width: 300),
                const SizedBox(height: 70),
                Text('Cari apa hayoo?', style: AppFonts.dark.copyWith(fontSize: 24)),
                const SizedBox(height: 14),
                Text(
                  'Fitur yang kamu cari saat ini belum tersedia. \nTunggu update berikutnya ya!',
                  style: AppFonts.secondary.copyWith(fontSize: 16),
                  textAlign: TextAlign.center,
                ),
                const SizedBox(height: 50),
                Container(
                  width: 210,
                  height: 50,
                  child: ElevatedButton(
                    style: const ButtonStyle(
                      backgroundColor: WidgetStatePropertyAll(AppColors.primary)
                    ),
                    onPressed: () {
                      Navigator.push(context, MaterialPageRoute(builder: (context) => const HomeScreen()));
                    },
                    child: Text(
                      'Kembali',
                      style: AppFonts.light.copyWith(fontSize: 14),
                    )),
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}