import 'package:belive/const/styles.dart';
import 'package:flutter/material.dart';

class BottomNav extends StatelessWidget {
  final IconData icon;
  final bool isActive;

  const BottomNav({super.key, required this.icon, this.isActive = false});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        const Spacer(),
        Icon(icon, color: isActive ? AppColors.primary : AppColors.secondary, size: 26),
        const Spacer(),
        isActive ? Container(
          width: 30,
          height: 2,
          decoration: BoxDecoration(
            color: isActive? AppColors.primary : AppColors.secondary,
            borderRadius: const BorderRadius.vertical(
              top: Radius.circular(1000)
            )
          ),
        ) : Container()

      ],
    );
  }
}