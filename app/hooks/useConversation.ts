import { useParams } from "next/navigation";
import { useMemo } from "react";

export default function useConversation() {
  const params = useParams();

  const conversationId: string = useMemo(() => {
    if (!params?.conversationId) return "";
    return params.conversationId as string;
  }, [params?.conversationId]);

  const isOpen: boolean = useMemo(() => !!conversationId, [conversationId]);

  return useMemo(
    () => ({
      isOpen,
      conversationId,
    }),
    [isOpen, conversationId]
  );
}
