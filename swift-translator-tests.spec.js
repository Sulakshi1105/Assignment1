const { test, expect } = require('@playwright/test');

const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

const TEST_DATA = {
  positive: [
    
    {
      tcId: 'Pos_Fun_0001',
      name: 'Simple sentence about going to shop',
      input: 'mama kadeata yanavaa',
      expected: 'මම කඩේට යනවා',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0002',
      name: 'Compound sentence about class and books',
      input: 'mama panthi gihin ena gaman poth tika geannam',
      expected: 'මම පන්ති ගිහින් එන ගමන් පොත් ටික ගේන්නම්',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0003',
      name: 'Complex sentence about inability to come',
      input: 'mata iiyee enna nohaeki vunea asaniipa viima nisaa',
      expected: 'මට ඊයේ එන්න නොහැකි වුනේ අසනීප වීම නිසා',
      category: 'Daily language usage',
      grammar: 'Complex sentence',
      length: 'M'
    },
    
    
    {
      tcId: 'Pos_Fun_0004',
      name: 'Interrogative question about reading a book',
      input: 'oyaa mea potha kiyevvadha?',
      expected: 'ඔයා මේ පොත කියෙව්වද?',
      category: 'Daily language usage',
      grammar: 'Interrogative questions',
      length: 'S'
    },

    {
      tcId: 'Pos_Fun_0005',
      name: 'Imperative command to stay here',
      input: 'methanin vaadi venna',
      expected: 'මෙතනින් වාඩි වෙන්න',
      category: 'Daily language usage',
      grammar: 'Imperative command',
      length: 'S'
    },
    
    
    {
      tcId: 'Pos_Fun_0006',
      name: 'Positive statement about watching something',
      input: 'mama eeka baeluvaa',
      expected: 'මම ඒක බැලුවා',
      category: 'Daily language usage',
      grammar: 'Positive forms',
      length: 'S'
    },
    
    
    {
      tcId: 'Pos_Fun_0007',
      name: 'Negative statement about not watching something',
      input: 'mama eka baeluve naehae',
      expected: 'මම එක බැලුවෙ නැහැ',
      category: 'Daily language usage',
      grammar: 'Negative forms',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0008',
      name: 'Well-wishing statement',
      input: 'suba nava vasarak veavaa',
      expected: 'සුබ නව වසරක් වේවා',
      category: 'Greeting / request / response',
      grammar: 'Greetings',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0009',
      name: 'Polite request',
      input: 'karuNaakaralaa methanin vadi velaa inna',
      expected: 'කරුණාකරලා මෙතනින් වාඩි වෙලා ඉන්න',
      category: 'Daily language usage',
      grammar: 'Request',
      length: 'M'
    },
    
    
    {
      tcId: 'Pos_Fun_0010',
      name: 'Casual response',
      input: 'hari, mama innam',
      expected: 'හරි, මම ඉන්නම්',
      category: 'Daily language usage',
      grammar: 'Responses',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0011',
      name: 'Polite phrasing request',
      input: 'karuNaakaralaa mata eeka naevatha kiyanna puLuvandha?',
      expected: 'කරුණාකරලා මට ඒක නැවත කියන්න පුළුවන්ද?',
      category: 'Daily language usage',
      grammar: 'Polite phrasing',
      length: 'M'
    },
    
  
    {
      tcId: 'Pos_Fun_0012',
      name: 'Informal phrase asking to check and tell',
      input: 'eeka balalaa kiyapan',
      expected: 'ඒක බලලා කියපන්',
      category: 'Daily language usage',
      grammar: 'Informal phrase',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0013',
      name: 'Day-to-day expression about going home',
      input: 'mata gedhara yanna oona',
      expected: 'මට ගෙදර යන්න ඕන',
      category: 'Daily language usage',
      grammar: ' Frequently used day-to-day expressions',
      length: 'S'
    },
    
   
    {
      tcId: 'Pos_Fun_0014',
      name: 'Common phrase about watching',
      input: 'balan enna',
      expected: 'බලන් එන්න',
      category: 'Daily language usage',
      grammar: 'Multi-word expressions and frequent collocations',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0015',
      name: 'Going to a place with proper spacing',
      input: 'ohu pittaniyata yanavaa',
      expected: 'ඔහු පිට්ටනියට යනවා',
      category: 'Daily language usage',
      grammar: 'Proper spacing',
      length: 'S'
    },
    
    {
      tcId: 'Pos_Fun_0016',
      name: 'Going to a place without spaces',
      input: 'ohupittaniyatayanavaa',
      expected: 'ඔහුපිට්ටනියටයනවා',
      category: 'Daily language usage',
      grammar: 'Missing spaces / joined words (stress test) ',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0017',
      name: 'Repeat words',
      input: 'hari hari',
      expected: 'හරි හරි',
      category: 'Daily language usage',
      grammar: 'Repeated word expressions used for emphasis ',
      length: 'S'
    },
    
    {
      tcId: 'Pos_Fun_0018',
      name: 'Tense variation in daily activity',
      input: 'mama gedhara vaeda kalaa',
      expected: 'මම ගෙදර වැඩ කලා',
      category: 'Daily language usage',
      grammar: 'Tense variations(past)',
      length: 'S'
    },
    
    
    
    {
      tcId: 'Pos_Fun_0019',
      name: 'Common phrase pattern',
      input: 'oyaa ehema kiyanna epaa',
      expected: 'ඔයා එහෙම කියන්න එපා',
      category: 'Daily language usage',
      grammar: 'Negotiation patterns',
      length: 'S'
    },
    
    {
      tcId: 'Pos_Fun_0020',
      name: 'English brand term embedded',
      input: 'mama ohuta ee sambanDhava email ekak yaevvaa',
      expected: 'මම ඔහුට ඒ සම්බන්ධව email එකක් යැව්වා',
      category: 'English words',
      grammar: 'English technical/brand terms embedded in Singlish ',
      length: 'M'
    },

    {
      tcId: 'Pos_Fun_0021',
      name: 'place names and common English words',
      input: 'mama ATM eken salli aran ennam',
      expected: 'මම ATM එකෙන් සල්ලි අරන් එන්නම්',
      category: 'daily language usage',
      grammar: 'Sentences containing places and common English words that should remain as they are',
      length: 'M'
    },

    {
      tcId: 'Pos_Fun_0022',
      name: 'Units of measurement',
      input: 'paan piti 500g ekathu kara mishra karanna',
      expected: 'පාන් පිටි 500g එකතු කර මිශ්‍ර කරන්න',
      category: 'daily language usage',
      grammar: 'Currency, time formats, dates, and units of measurement ',
      length: 'M'
    },

    {
      tcId: 'Pos_Fun_0023',
      name: 'Multiple spaces handling',
      input: 'mama   baeQQkuvata yanavaa',
      expected: 'මම   බැංකුවට යනවා',
      category: 'daily language usage',
      grammar: 'Multiple spaces',
      length: 'S'
    },

    {
      tcId: 'Pos_Fun_0024',
      name: 'Line breaks',
      input: 'mama ee gaena hariyatama dhanne naehae. Heta ahalaa kiyannam',
      expected: 'මම ඒ ගැන හරියටම දන්නෙ නැහැ. හෙට අහලා කියන්නම්',
      category: 'daily language usage',
      grammar: 'Line breaks (multi-line input) ',
      length: 'M'
    },
   
  ],
  
  negative: [
    
    {
      tcId: 'Neg_Fun_0001',
      name: 'Abbreviation in sentence',
      input: 'pariGhaNakaya varthamaana lookayee jana jiivithayee athYAvashYA aQQgayak bavata pathva aetha. aethaem saQQvarDhitha ratavala janathaavata pariGhaNakayee sahaaya nomaethiva jiivathviimata nohaeki thathvayak udhgatha vemin pavathi.',
      expected: 'පරිඝණකය වර්තමාන ලෝකයේ ජන ජීවිතයේ අත්‍යවශ්‍ය අංගයක් බවට පත්ව ඇත. ඇතැම් සංවර්ධිත රටවල ජනතාවට පරිඝණකයේ සහාය නොමැතිව ජීවත්වීමට නොහැකි තත්වයක් උද්ගත වෙමින් පවති.',
      category: 'Names / places / common English words',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0002',
      name: 'Question with spacing error',
      input: 'appatasiri mata eka kiyanna baeri vuNaanea',
      expected: 'අප්පටසිරි මට එක කියන්න බැරි වුණානේ',
      category: 'Typographical error handling',
      grammar: 'Interrogative (question)',
      length: 'S'
    },

    {
      tcId: 'Neg_Fun_0003',
      name: 'Complex slang statement',
      input: 'oyaa gedhara vaeda karaadha ?',
      expected: 'ඔයා ගෙදර වැඩ කරාද?',
      category: 'Slang / informal language',
      grammar: 'Imperative (command)',
      length: 'S'
    },

    {
      tcId: 'Neg_Fun_0004',
      name: 'Complex slang statement',
      input: 'maarthu 25 dhina sita 9.00 AM panthiya aaramBha vee. ?',
      expected: 'මාර්තු 25 දින සිට 9.00 AM පන්තිය ආරම්භ වේ.',
      category: 'Slang / informal language',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    
    {
      tcId: 'Neg_Fun_0005',
      name: 'Common phrase pattern',
      input: 'mama dhath madinavaa',
      expected: 'මම දත් මදිනවා',
      category: 'Word combination / phrase pattern',
      grammar: 'Simple sentence',
      length: 'S'
    },

    {
      tcId: 'Neg_Fun_0006',
      name: 'English brand term embedded',
      input: 'api aniddhaata chithrapatiyak balanna yamu',
      expected: 'අපි අනිද්දාට චිත්‍රපටියක් බලන්න යමු',
      category: 'Mixed Singlish + English',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0007',
      name: 'Line break in sentence',
      input: 'liyapadhiQQchi viimata Rs. 2000 ka mudhalak geviya yuthuyi',
      expected: 'ලියපදිංචි වීමට Rs. 2000 ක මුදලක් ගෙවිය යුතුයි',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Simple sentence',
      length: 'S'
    },
    

    {
      tcId: 'Neg_Fun_0008',
      name: 'Exclamation mark handling',
      input: 'ohu durakaThanaya genaavaa',
      expected: 'ඔහු දුරකථනය ගෙනාවා',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
  
    {
      tcId: 'Neg_Fun_0009',
      name: 'Currency amount',
      input: 'ovun pansal giyaa',
      expected: 'ඔවුන් පන්සල් ගියා',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    
    {
      tcId: 'Neg_Fun_0010',
      name: 'Medium length conversation',
      input: 'puLuwan nam eyavath ekka yanna',
      expected: 'පුළුවන් නම් එයාවත් එක්ක යන්න',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'M'
    },

    
    
    

    
  ],
  
  ui: {
    tcId: 'Pos_UI_001',
    name: 'Real-time translation updates as typing',
    input: 'maarthu 25 dhina sita 9.00 AM panthiya aaramBha vee.',
    partialInput: 'mama kae',
    expectedFull: 'මාර්තු 25 දින සිට 9.00 AM පන්තිය ආරම්භ වේ.',
    category: 'Usability flow',
    grammar: 'Present tense',
    length: 'S'
  }
};

// Helper Functions
class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

// Test Suite
test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      (() => {
        const currentTestCase = testCase;
        test(`${currentTestCase.tcId} - ${currentTestCase.name}`, async () => {
          const actualOutput = await translator.performTranslation(currentTestCase.input);
          expect(actualOutput).toBe(currentTestCase.expected);
          await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
        });
      })();
    }
  });

  // Negative Functional Tests
  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      (() => {
        const currentTestCase = testCase;
        test(`${currentTestCase.tcId} - ${currentTestCase.name}`, async () => {
          const actualOutput = await translator.performTranslation(currentTestCase.input);
          expect(actualOutput).toBe(currentTestCase.expected);
          await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
        });
      })();
    }
  });

  // UI Test
  test.describe('UI Functionality Tests', () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      await translator.navigateToSite();
      const input = await translator.getInputField();
      const output = await translator.getOutputField();

      await translator.clearAndWait();
      
      // Type partial input
      await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });
      
      // Wait for partial output
      await page.waitForTimeout(1500);
      
      // Verify partial translation appears
      let outputText = await output.textContent();
      expect(outputText.trim().length).toBeGreaterThan(0);
      
      // Complete typing
      await input.pressSequentially(TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length), { delay: 150 });
      
      // Wait for full translation
      await translator.waitForOutput();
      
      // Verify full translation
      outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui.expectedFull);
      
      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
});
