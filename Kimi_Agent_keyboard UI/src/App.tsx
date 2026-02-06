import { useState, useRef } from 'react';
import './App.css';

// Suggestions data
const suggestions = ['Hel', 'Thc', 'Sou', 'Gre', 'Let'];

// Keyboard rows
const keyboardRows = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'backspace'],
  ['123', 'emoji', 'space', 'send']
];

// Toolbar items - expanded with many more keyboard icons
const toolbarItems = [
  { id: 'chat', label: 'Chat', icon: ChatIcon },
  { id: 'translate', label: 'Translate', icon: TranslateIcon },
  { id: 'work', label: 'Work', icon: WorkIcon },
  { id: 'casual', label: 'Casual', icon: CasualIcon },
  { id: 'voice', label: 'Voice', icon: MicIcon },
  { id: 'clipboard', label: 'Paste', icon: ClipboardIcon },
  { id: 'gif', label: 'GIF', icon: GifIcon },
  { id: 'sticker', label: 'Sticker', icon: StickerIcon },
  { id: 'search', label: 'Search', icon: SearchIcon },
  { id: 'settings', label: 'Settings', icon: SettingsIcon },
  { id: 'theme', label: 'Theme', icon: ThemeIcon },
  { id: 'language', label: 'Lang', icon: LanguageIcon },
  { id: 'floating', label: 'Float', icon: FloatingIcon },
  { id: 'onehand', label: 'OneHand', icon: OneHandIcon },
  { id: 'resize', label: 'Resize', icon: ResizeIcon },
  { id: 'edit', label: 'Edit', icon: EditIcon },
  { id: 'history', label: 'History', icon: HistoryIcon },
  { id: 'autocorrect', label: 'Auto', icon: AutoCorrectIcon },
  { id: 'capslock', label: 'Caps', icon: CapsLockIcon },
  { id: 'numbers', label: '123', icon: NumbersIcon },
  { id: 'symbols', label: '#+=', icon: SymbolsIcon },
  { id: 'emoji', label: 'Emoji', icon: EmojiToolbarIcon },
  { id: 'handwriting', label: 'Write', icon: HandwritingIcon },
  { id: 'qrcode', label: 'QR', icon: QRCodeIcon },
  { id: 'scan', label: 'Scan', icon: ScanIcon },
  { id: 'dictation', label: 'Dictate', icon: DictationIcon },
  { id: 'location', label: 'Location', icon: LocationIcon },
  { id: 'calendar', label: 'Calendar', icon: CalendarIcon },
  { id: 'contacts', label: 'Contacts', icon: ContactsIcon },
  { id: 'camera', label: 'Camera', icon: CameraIcon },
];

// Icon components
function ChatIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function TranslateIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 8l6 6" />
      <path d="M4 14l6-6 3-3" />
      <path d="M2 5h12" />
      <path d="M7 2h1" />
      <path d="M22 22l-5-10-5 10" />
      <path d="M14 18h6" />
    </svg>
  );
}

function WorkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function CasualIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  );
}

function ShiftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l9 9h-5v9H8v-9H3l9-9z" />
    </svg>
  );
}

function BackspaceIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
      <line x1="18" y1="9" x2="12" y2="15" />
      <line x1="12" y1="9" x2="18" y2="15" />
    </svg>
  );
}

function EmojiIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  );
}

function SendIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function MicIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  );
}

function ClipboardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    </svg>
  );
}

function GifIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <text x="4" y="17" fontSize="12" fontWeight="bold" fill="currentColor" stroke="none">GIF</text>
    </svg>
  );
}

function StickerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
      <path d="M16 22l-4-4-4 4" />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function SettingsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function ThemeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function LanguageIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function FloatingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  );
}

function OneHandIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="4" width="12" height="16" rx="2" ry="2" />
      <line x1="12" y1="8" x2="12" y2="8.01" />
      <line x1="12" y1="12" x2="12" y2="12.01" />
      <line x1="12" y1="16" x2="12" y2="16.01" />
    </svg>
  );
}

function ResizeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 3L3 21" />
      <path d="M21 9V3h-6" />
      <path d="M3 15v6h6" />
    </svg>
  );
}

function EditIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}

function HistoryIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function AutoCorrectIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  );
}

function CapsLockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l9 9h-5v9H8v-9H3l9-9z" />
      <line x1="8" y1="21" x2="16" y2="21" />
    </svg>
  );
}

function NumbersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <text x="4" y="17" fontSize="11" fontWeight="bold" fill="currentColor" stroke="none">123</text>
    </svg>
  );
}

function SymbolsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <text x="3" y="17" fontSize="12" fontWeight="bold" fill="currentColor" stroke="none">#+=</text>
    </svg>
  );
}

function EmojiToolbarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  );
}

function HandwritingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  );
}

function QRCodeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  );
}

function ScanIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <line x1="3" y1="12" x2="21" y2="12" />
    </svg>
  );
}

function DictationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="8" y1="22" x2="16" y2="22" />
      <circle cx="12" cy="10" r="1" fill="currentColor" />
    </svg>
  );
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ContactsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function CameraIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

function App() {
  const [inputText, setInputText] = useState('');
  const [selectedSuggestion, setSelectedSuggestion] = useState('Hel');
  const [activeToolbarItem, setActiveToolbarItem] = useState('chat');
  const [isShifted, setIsShifted] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyPress = (key: string) => {
    switch (key) {
      case 'shift':
        setIsShifted(!isShifted);
        break;
      case 'backspace':
        setInputText(prev => prev.slice(0, -1));
        break;
      case 'space':
        setInputText(prev => prev + ' ');
        break;
      case '123':
        // Switch to numbers/symbols
        break;
      case 'emoji':
        setShowEmoji(!showEmoji);
        break;
      case 'send':
        if (inputText.trim()) {
          setInputText('');
        }
        break;
      default:
        const char = isShifted ? key.toUpperCase() : key;
        setInputText(prev => prev + char);
        setIsShifted(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSelectedSuggestion(suggestion);
    setInputText(prev => prev + suggestion);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] flex flex-col items-center justify-center p-4 font-sans">
      {/* Phone Frame */}
      <div className="w-full max-w-[375px] bg-[#0A0A0F] rounded-[40px] overflow-hidden shadow-2xl border-8 border-[#141419]">
        {/* Status Bar */}
        <div className="flex justify-between items-center px-6 py-3 text-sm font-medium text-white">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
            </svg>
            <div className="w-6 h-3 bg-white rounded-sm relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-2 bg-white rounded-r-sm"></div>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="px-4 pt-4 pb-2">
          <div className="bg-[#141419] rounded-2xl p-4 shadow-sm min-h-[80px] flex items-start border border-[#1E1E28]">
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type something..."
              className="w-full bg-transparent outline-none text-white placeholder-gray-500 text-base"
            />
            {inputText && (
              <button 
                onClick={() => setInputText('')}
                className="ml-2 w-5 h-5 bg-[#00D9FF] rounded-full flex items-center justify-center text-[#0A0A0F] text-xs font-bold"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Mascot Icon */}
        <div className="flex justify-center py-6">
          <div className="w-20 h-20 bg-[#141419] rounded-3xl shadow-md flex items-center justify-center border border-[#1E1E28]">
            <svg viewBox="0 0 100 100" className="w-14 h-14">
              {/* Cat/Fox face */}
              <ellipse cx="50" cy="55" rx="30" ry="25" fill="#00D9FF" />
              {/* Ears */}
              <path d="M25 35 L20 15 L40 30 Z" fill="#00D9FF" />
              <path d="M75 35 L80 15 L60 30 Z" fill="#00D9FF" />
              {/* Inner ears */}
              <path d="M28 32 L25 20 L36 30 Z" fill="#66E8FF" />
              <path d="M72 32 L75 20 L64 30 Z" fill="#66E8FF" />
              {/* Eyes */}
              <circle cx="38" cy="52" r="4" fill="#0A0A0F" />
              <circle cx="62" cy="52" r="4" fill="#0A0A0F" />
              <circle cx="38" cy="52" r="1.5" fill="#00D9FF" />
              <circle cx="62" cy="52" r="1.5" fill="#00D9FF" />
              {/* Nose */}
              <ellipse cx="50" cy="62" rx="4" ry="3" fill="#66E8FF" />
              {/* Mouth */}
              <path d="M45 68 Q50 72 55 68" stroke="#0A0A0F" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              {/* Whiskers */}
              <line x1="20" y1="58" x2="35" y2="60" stroke="#0A0A0F" strokeWidth="1" strokeLinecap="round" />
              <line x1="20" y1="64" x2="35" y2="64" stroke="#0A0A0F" strokeWidth="1" strokeLinecap="round" />
              <line x1="65" y1="60" x2="80" y2="58" stroke="#0A0A0F" strokeWidth="1" strokeLinecap="round" />
              <line x1="65" y1="64" x2="80" y2="64" stroke="#0A0A0F" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Keyboard */}
        <div className="bg-[#141419] rounded-t-[32px] shadow-lg px-3 pt-4 pb-6 border-t border-[#1E1E28]">
          {/* Handle bar */}
          <div className="flex justify-center mb-3">
            <div className="w-10 h-1 bg-[#2A2A38] rounded-full"></div>
          </div>

          {/* Suggestions */}
          <div className="flex justify-center gap-2 mb-4 px-2">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => handleSuggestionClick(suggestion)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedSuggestion === suggestion
                    ? 'bg-[#00D9FF] text-[#0A0A0F] shadow-md shadow-[#00D9FF]/30'
                    : 'bg-transparent text-gray-400 hover:bg-[#1E1E28]'
                }`}
              >
                {suggestion}
              </button>
            ))}
          </div>

          {/* Keyboard Keys */}
          <div className="space-y-2">
            {/* Row 1 */}
            <div className="flex justify-center gap-1.5">
              {keyboardRows[0].map((key) => (
                <button
                  key={key}
                  onClick={() => handleKeyPress(key)}
                  className="w-8 h-10 bg-[#1E1E28] rounded-xl shadow-sm border border-[#2A2A38] flex items-center justify-center text-sm font-medium text-gray-300 active:scale-95 active:bg-[#2A2A38] transition-all duration-75"
                >
                  {isShifted ? key.toUpperCase() : key}
                </button>
              ))}
            </div>

            {/* Row 2 */}
            <div className="flex justify-center gap-1.5 px-4">
              {keyboardRows[1].map((key) => (
                <button
                  key={key}
                  onClick={() => handleKeyPress(key)}
                  className="w-8 h-10 bg-[#1E1E28] rounded-xl shadow-sm border border-[#2A2A38] flex items-center justify-center text-sm font-medium text-gray-300 active:scale-95 active:bg-[#2A2A38] transition-all duration-75"
                >
                  {isShifted ? key.toUpperCase() : key}
                </button>
              ))}
            </div>

            {/* Row 3 */}
            <div className="flex justify-center gap-1.5">
              <button
                onClick={() => handleKeyPress('shift')}
                className={`w-10 h-10 rounded-xl shadow-sm border border-[#2A2A38] flex items-center justify-center active:scale-95 transition-all duration-75 ${
                  isShifted ? 'bg-[#00D9FF] text-[#0A0A0F]' : 'bg-[#1E1E28] text-gray-400'
                }`}
              >
                <ShiftIcon className="w-4 h-4" />
              </button>
              {keyboardRows[2].slice(1, -1).map((key) => (
                <button
                  key={key}
                  onClick={() => handleKeyPress(key)}
                  className="w-8 h-10 bg-[#1E1E28] rounded-xl shadow-sm border border-[#2A2A38] flex items-center justify-center text-sm font-medium text-gray-300 active:scale-95 active:bg-[#2A2A38] transition-all duration-75"
                >
                  {isShifted ? key.toUpperCase() : key}
                </button>
              ))}
              <button
                onClick={() => handleKeyPress('backspace')}
                className="w-10 h-10 bg-[#1E1E28] rounded-xl shadow-sm border border-[#2A2A38] flex items-center justify-center text-gray-400 active:scale-95 active:bg-[#2A2A38] transition-all duration-75"
              >
                <BackspaceIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Row 4 */}
            <div className="flex justify-center gap-2">
              <button
                onClick={() => handleKeyPress('123')}
                className="w-14 h-10 bg-[#1E1E28] rounded-xl shadow-sm border border-[#2A2A38] flex items-center justify-center text-xs font-semibold text-gray-300 active:scale-95 active:bg-[#2A2A38] transition-all duration-75"
              >
                123
              </button>
              <button
                onClick={() => handleKeyPress('emoji')}
                className="w-10 h-10 bg-[#1E1E28] rounded-xl shadow-sm border border-[#2A2A38] flex items-center justify-center text-gray-400 active:scale-95 active:bg-[#2A2A38] transition-all duration-75"
              >
                <EmojiIcon className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleKeyPress('space')}
                className="w-32 h-10 bg-[#1E1E28] rounded-xl shadow-sm border border-[#2A2A38] flex items-center justify-center text-xs font-medium text-gray-500 active:scale-95 active:bg-[#2A2A38] transition-all duration-75"
              >
                space
              </button>
              <button
                onClick={() => handleKeyPress('send')}
                className="w-12 h-10 bg-[#00D9FF] rounded-xl shadow-md shadow-[#00D9FF]/30 flex items-center justify-center text-[#0A0A0F] active:scale-95 active:bg-[#00C4EC] transition-all duration-75"
              >
                <SendIcon className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Bottom Toolbar - Expanded with more icons */}
          <div className="mt-4 pt-3 border-t border-[#1E1E28]">
            <div className="flex overflow-x-auto scrollbar-hide gap-1 px-1 pb-1">
              {toolbarItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeToolbarItem === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveToolbarItem(item.id)}
                    className="flex flex-col items-center gap-1 py-2 px-3 min-w-[52px] flex-shrink-0 rounded-xl transition-all duration-200 hover:bg-[#1E1E28]"
                  >
                    <Icon 
                      className={`w-5 h-5 transition-colors duration-200 ${
                        isActive ? 'text-[#00D9FF]' : 'text-gray-500'
                      }`} 
                    />
                    <span 
                      className={`text-[9px] font-medium transition-colors duration-200 whitespace-nowrap ${
                        isActive ? 'text-[#00D9FF]' : 'text-gray-500'
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="flex justify-center py-2 bg-[#141419]">
          <div className="w-32 h-1 bg-gray-600 rounded-full"></div>
        </div>
      </div>

      {/* Instructions */}
      <p className="mt-6 text-gray-400 text-sm text-center">
        Tap keys to type • Use toolbar to switch modes
      </p>
    </div>
  );
}

export default App;
