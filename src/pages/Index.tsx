import { Bot, MessageSquare } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-muted/30">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary shadow-lg">
              <Bot className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                ココナラ講座BOT
              </h1>
              <p className="text-sm text-muted-foreground">
                講座の情報をもとにご質問にお答えします
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto flex flex-1 flex-col px-4 py-6">
        <div className="flex flex-1 flex-col overflow-hidden rounded-2xl border bg-card shadow-xl">
          {/* Chat Info Bar */}
          <div className="flex items-center gap-2 border-b bg-muted/50 px-6 py-4">
            <MessageSquare className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-foreground">
              チャットを開始してください
            </span>
          </div>

          {/* Iframe Container */}
          <div className="relative flex-1">
            <iframe
              src="https://udify.app/chatbot/vpPrQFwxV296S51D"
              className="absolute inset-0 h-full w-full"
              style={{ border: 0, minHeight: '700px' }}
              allow="microphone"
              title="ココナラ講座チャットボット"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 text-center">
          <p className="text-sm text-muted-foreground">
            Powered by Udify AI Chatbot
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
