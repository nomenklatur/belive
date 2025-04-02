import 'package:belive/const/styles.dart';
import 'package:flutter/material.dart';

class FacilityItem extends StatelessWidget {
  final int facilityCount;
  final String facilityName;
  final IconData? facilityIcon;

  const FacilityItem({
    super.key,
    required this.facilityCount,
    required this.facilityName,
    this.facilityIcon = Icons.settings,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Icon(
          facilityIcon,
          size: 32,
        ),
        const SizedBox(height: 8),
        Text.rich(
          TextSpan(
            text: facilityCount.toString(),
            style: AppFonts.primary.copyWith(fontSize: 14),
            children: [
              TextSpan(text: " $facilityName", style: AppFonts.secondary.copyWith(fontSize: 14))
            ]
          )
        ),
      ],
    );
  }
}