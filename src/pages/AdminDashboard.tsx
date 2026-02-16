import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Loader2, LogOut, RefreshCw, Eye } from "lucide-react";

interface Order {
  id: string;
  phone_number: string;
  email: string | null;
  whatsapp: string | null;
  country: string;
  amount: string;
  status: string;
  created_at: string;
}

const AdminDashboard = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalVisits, setTotalVisits] = useState<number>(0);
  const [todayVisits, setTodayVisits] = useState<number>(0);
  const navigate = useNavigate();

  const fetchOrders = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching orders:", error.message);
      if (error.message.includes("permission") || error.code === "42501") {
        await supabase.auth.signOut();
        navigate("/admin");
      }
    } else {
      setOrders(data || []);
    }
    setLoading(false);
  };

  const fetchVisits = async () => {
    const { count: total } = await supabase
      .from("page_views")
      .select("*", { count: "exact", head: true });
    setTotalVisits(total || 0);

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const { count: todayCount } = await supabase
      .from("page_views")
      .select("*", { count: "exact", head: true })
      .gte("visited_at", today.toISOString());
    setTodayVisits(todayCount || 0);
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/admin");
        return;
      }
      fetchOrders();
      fetchVisits();
    });
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin");
  };

  const handleRefresh = () => {
    fetchOrders();
    fetchVisits();
  };

  return (
    <div className="min-h-screen bg-muted/30 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-heading font-bold">Orders Dashboard</h1>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleRefresh} disabled={loading}>
              <RefreshCw className={`w-4 h-4 mr-1 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-1" />
              Logout
            </Button>
          </div>
        </div>

        {/* Visit Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-background rounded-lg border shadow-sm p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Eye className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">{totalVisits}</p>
              <p className="text-xs text-muted-foreground">Total Visits</p>
            </div>
          </div>
          <div className="bg-background rounded-lg border shadow-sm p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
              <Eye className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <p className="text-2xl font-bold">{todayVisits}</p>
              <p className="text-xs text-muted-foreground">Today's Visits</p>
            </div>
          </div>
          <div className="bg-background rounded-lg border shadow-sm p-4 flex items-center gap-3 col-span-2 md:col-span-1">
            <div>
              <p className="text-2xl font-bold">{orders.length}</p>
              <p className="text-xs text-muted-foreground">Total Orders</p>
            </div>
          </div>
        </div>

        <div className="bg-background rounded-lg border shadow-sm">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
            </div>
          ) : orders.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              No orders yet.
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Country</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>WhatsApp</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="text-xs">
                      {new Date(order.created_at).toLocaleDateString("fr-FR", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </TableCell>
                    <TableCell>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        {order.country}
                      </span>
                    </TableCell>
                    <TableCell className="font-mono text-sm">{order.phone_number}</TableCell>
                    <TableCell className="text-sm">{order.email || "—"}</TableCell>
                    <TableCell className="font-mono text-sm">{order.whatsapp || "—"}</TableCell>
                    <TableCell className="text-sm font-medium">{order.amount}</TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                        order.status === "confirmed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}>
                        {order.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>

        <p className="text-sm text-muted-foreground text-center">
          Total: {orders.length} order{orders.length !== 1 ? "s" : ""}
        </p>
      </div>
    </div>
  );
};

export default AdminDashboard;
