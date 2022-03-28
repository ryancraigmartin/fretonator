import { Component, OnInit } from '@angular/core';
import { PatternFretMaps, PatternModeSelectors } from '../../../util/constants';
import { FretMap, Mode } from '../../../util/types';
import { MetaService } from '../../../common/meta/meta.service';
import { FretboardConfigurations } from '../../../common/fretonator/fretboard/fretboard.component';

@Component({
  selector: 'app-learn-index',
  templateUrl: './learn-index.component.html',
  styleUrls: ['./learn-index.component.scss'],
})
export class LearnIndexComponent implements OnInit {
  pageDescription =
    'In order to play and Jam in all 7 of the standard modes, you only need to learn 7 patterns. These patterns always appear in the exact same order across the fretboard, regardless of the key or mode.';
  pageTitle =
    'Learn the 7 scale patterns on the guitar (the 7 standard modes of the major scale)';
  pageUrl = 'https://www.fretonator.com/learn';
  modeSelectors = PatternModeSelectors;
  selectedMode = Mode.ionian;
  selectedFretMap: FretMap = PatternFretMaps.ionian;
  shouldExpand = true;
  modesRequiringExpansion = [Mode.mixolydian, Mode.aeolian, Mode.locrian];

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.updateAllGenericMeta(
      this.pageUrl,
      this.pageTitle,
      this.pageDescription
    );
  }

  get FretboardConfigurations() {
    return FretboardConfigurations;
  }

  setPattern(mode: Mode) {
    this.selectedMode = mode;
    this.selectedFretMap = PatternFretMaps[mode];

    if (this.modesRequiringExpansion.indexOf(mode) > -1) {
      this.shouldExpand = true;
    }
  }
}
